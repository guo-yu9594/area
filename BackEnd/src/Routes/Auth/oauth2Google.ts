import { google } from "googleapis";
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { insertToken } from "../../Utils/tokens";

const OAuth2Client = google.auth.OAuth2;

dotenv.config();
const app = express();
const prisma = new PrismaClient();

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
  "http://localhost:8081/auth/google/redirect"
);

export const getGoogleOAuthURL = (): string => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/gmail.send",
      "https://www.googleapis.com/auth/drive.appdata",
      "https://www.googleapis.com/auth/drive.appfolder",
      "https://www.googleapis.com/auth/drive.install",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive.resource",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.metadata",
      "https://www.googleapis.com/auth/drive.readonly",
      "https://www.googleapis.com/auth/youtube",
      "https://www.googleapis.com/auth/youtube.readonly",
      "https://www.googleapis.com/auth/youtube.upload",
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/spreadsheets.readonly",
      "https://www.googleapis.com/auth/documents",
      "https://www.googleapis.com/auth/documents.readonly",
    ],
    include_granted_scopes: true,
  });
  return authUrl;
};

app.get("/google", (req: Request, res: Response) => {
  res.status(200).send(getGoogleOAuthURL());
});

const insertUserGoogle = async (
  email: string,
  accessToken: string,
  refrechToken: string,
  serviceId: number
) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        tokens: {
          create: {
            accessToken: accessToken,
            refrechToken: refrechToken,
            serviceId: serviceId,
          },
        },
      },
    });
    const token = jwt.sign({ userId: user.id }, "my-secret-key");
    const refreshToken = jwt.sign({ userId: user.id }, "my-secret-key", {
      expiresIn: "7d",
    });
    const userId = user.id;
    await insertToken(
      "",
      "",
      0,
      userId
    );
    return { token, refreshToken, userId };
  } catch (error) {
    console.error(error);
  }
};

const checkUserGoogle = async (
  email: string,
  accessToken: string,
  refrechToken: string
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      return 404;
    }

    const findToken = await prisma.token.findMany({
      where: {
        userId: user.id,
        serviceId: 1,
      },
    });

    if (!findToken) {
      throw new Error(`Aucun jeton trouvé`);
    }

    const updateToken = await prisma.token.update({
      where: {
        id: findToken[0].id,
      },
      data: {
        accessToken: accessToken,
        refrechToken: refrechToken,
      },
    });
    const token = jwt.sign({ userId: updateToken.id }, "my-secret-key");
    const refreshToken = jwt.sign({ userId: updateToken.id }, "my-secret-key", {
      expiresIn: "7d",
    });
    const userId = user.id;
    return { token, refreshToken, userId };
  } catch (error) {
    console.error(error);
  }
};

app.get("/google/redirect", async (req: Request, res: Response) => {
  const { code }: any = req.query;
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_ID,
    });
    const payload = ticket.getPayload();
    const email = payload.email;
    if (
      (await checkUserGoogle(
        email,
        tokens.access_token,
        tokens.refresh_token
      )) != 404
    ) {
      const { token, refreshToken, userId }: any = await checkUserGoogle(
        email,
        tokens.access_token,
        tokens.refresh_token
      );
      res.status(200).json({ token, refreshToken, userId: userId });
    } else {
      const { token, refreshToken, userId }: any = await insertUserGoogle(
        email,
        tokens.access_token,
        tokens.refresh_token,
        1
      );
      res.status(200).json({ token, refreshToken, userId: userId });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

const checkUserGoogleMobile = async (email: string, accessToken: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      return 404;
    }

    const findToken = await prisma.token.findMany({
      where: {
        userId: user.id,
        serviceId: 1,
      },
    });

    if (!findToken) {
      throw new Error(`Aucun jeton trouvé`);
    }

    const updateToken = await prisma.token.update({
      where: {
        id: findToken[0].id,
      },
      data: {
        accessToken: accessToken,
      },
    });
    const token = jwt.sign({ userId: updateToken.id }, "my-secret-key");
    const refreshToken = jwt.sign({ userId: updateToken.id }, "my-secret-key", {
      expiresIn: "7d",
    });
    return { token, refreshToken };
  } catch (error) {
    console.error(error);
  }
};

app.get("/google/redirect/mobile", async (req: Request, res: Response) => {
  const { accessToken }: any = req.query;
  console.log(accessToken);
  try {
    const ticket = await oAuth2Client.getTokenInfo(accessToken);
    const email = ticket.email;
    if ((await checkUserGoogleMobile(email, accessToken)) != 404) {
      const { token, refreshToken }: any = await checkUserGoogleMobile(
        email,
        accessToken
      );
      res.status(200).json({ token, refreshToken });
    } else {
      const { token, refreshToken }: any = await insertUserGoogle(
        email,
        accessToken,
        accessToken,
        1
      );
      res.status(200).json({ token, refreshToken });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export default app;
