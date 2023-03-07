import express, { Request, Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";

const DISCORD_APP_ID = process.env.DISCORD_ID;
const DISCORD_APP_SECRET = process.env.DISCORD_SECRET;
const REDIRECT_URI = process.env.DISCORD_REDIRECT_URL;
const DISCORD_OAUTH2_AUTHORIZE_URL = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=identify%20guilds`;
const DISCORD_OAUTH2_TOKEN_URL = "https://discord.com/api/v10/oauth2/token";

export const getDiscordOAuthURL = () => {
  return DISCORD_OAUTH2_AUTHORIZE_URL;
};

const exchangeCodeForToken = async (code: string) => {
  const data = {
    client_id: DISCORD_APP_ID,
    client_secret: DISCORD_APP_SECRET,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URI,
    scope: "identify guilds",
  };

  try {
    const response = await axios.post(DISCORD_OAUTH2_TOKEN_URL, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

class OAuth2DiscordController {

  // private async exchangeCodeForToken(code: string) {
  //   console.log('fgrzegregreg')
  //   console.log(code);
  //   const data = {
  //     client_id: DISCORD_APP_ID,
  //     client_secret: DISCORD_APP_SECRET,
  //     grant_type: "authorization_code",
  //     code: code,
  //     redirect_uri: REDIRECT_URI,
  //     scope: "identify guilds",
  //   };

  //   try {
  //     const response = await axios.post(DISCORD_OAUTH2_TOKEN_URL, data, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     });

  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };

  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.DISCORD;
    const userId: number = userConnect.userId;

    try {
      const data = await exchangeCodeForToken(code);
      await insertToken(
        data.access_token,
        data.refresh_token,
        serviceId,
        userId
      );
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  }

}

export default OAuth2DiscordController;