import express, { Request, Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";
import querystring from "querystring";

const CLIENT_ID = process.env.TWITCH_ID;
const CLIENT_SECRET = process.env.TWITCH_SECRET;
const REDIRECT_URI = "http://localhost:8081/auth/twitch/redirect";

export const getTwitchOAuthURL = () => {
  return `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls+channel%3Aread%3Asubscriptions`
};

class OAuth2TwitchController {
  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.TWITCH;
    const userId: number = userConnect.userId;

    try {
      const response = await axios.post(
        "https://id.twitch.tv/oauth2/token",
        querystring.stringify({
          grant_type: "authorization_code",
          code: code,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET
        }),
      );
      await insertToken(
        response.data.access_token,
        response.data.refresh_token,
        +serviceId,
        +userId
      );
      res.status(200).send(JSON.parse(JSON.stringify(response.data)));
    } catch (err) {
      console.error(err);
    }
  }
}

export default OAuth2TwitchController;
