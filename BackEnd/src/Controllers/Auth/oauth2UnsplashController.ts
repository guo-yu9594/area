import { Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";

const UNSPLASH_OAUTH2_AUTHORIZE_URL = "https://unsplash.com/oauth/authorize";
const UNSPLASH_OAUTH2_TOKEN_URL = "https://unsplash.com/oauth/token";
const UNSPLASH_CLIENT_SECRET = process.env.UNSPLASH_CLIENT_SECRET;
const UNSPLASH_CLIENT_ID = process.env.UNSPLASH_CLIENT_ID;
const UNSPLASH_REDIRECT_URL = process.env.UNSPLASH_REDIRECT_URI;

const UNSPLASH_SCOPES = [
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
  "write_likes",
  "write_followers",
  "read_collections",
  "write_collections",
];

export function getUnsplashOAuthURL() {
  return `${UNSPLASH_OAUTH2_AUTHORIZE_URL}?client_id=${UNSPLASH_CLIENT_ID}&redirect_uri=${UNSPLASH_REDIRECT_URL}&response_type=code&scope=${UNSPLASH_SCOPES.join("+")}`;
}

const exchangeCodeForToken = async (code: string) => {
  const data = {
    client_id: UNSPLASH_CLIENT_ID,
    client_secret: UNSPLASH_CLIENT_SECRET,
    code: code,
    redirect_uri: UNSPLASH_REDIRECT_URL,
    grant_type: "authorization_code",
  };

  try {
    const response = await axios.post(UNSPLASH_OAUTH2_TOKEN_URL, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

class OAuth2UnsplashController {
  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.UNSPLASH;
    const userId: number = userConnect.userId;

    try {
      const data = await exchangeCodeForToken(code);
      await insertToken(data.access_token, data.refresh_token, +serviceId, +userId);
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default OAuth2UnsplashController;
