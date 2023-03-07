import express, { Request, Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";

const CLIENT_ID = process.env.SLACK_CLIENT_ID;
const CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
const REDIRECT_URI = process.env.SLACK_REDIRECT_URI;

export const getSlackOAuthURL = () => {
  const scope = "channels:history,chat:write,users:read"; // the scopes you need for your app
  const authorizationUrl = `https://slack.com/oauth/v2/authorize?client_id=${CLIENT_ID}&user_scope=${scope}&redirect_uri=${REDIRECT_URI}`;
  return authorizationUrl;
};

const exchangeCodeForToken = async (code: string) => {
  const response = await axios.post(
    "https://slack.com/api/oauth.v2.access",
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
      redirect_uri: REDIRECT_URI,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    }
  );
  return response.data.authed_user.access_token;
};

class OAuth2SlackController {
  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.SLACK;
    const userId: number = userConnect.userId;

    try {
      const accessToken = await exchangeCodeForToken(code);
      await insertToken(accessToken, "", serviceId, userId);
      console.log("Inserted Slack access token : " + accessToken);
      res.status(200).send(accessToken);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default OAuth2SlackController;
