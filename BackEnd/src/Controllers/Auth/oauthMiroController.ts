import express, { Request, Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";
import querystring from "querystring";

const CLIENT_ID = process.env.MIRO_ID;
const CLIENT_SECRET = process.env.MIRO_SECRET;
const REDIRECT_URI = "http://localhost:8081/auth/miro/redirect";

export const getMiroOAuthURL = () => {
  return `https://miro.com/oauth/authorize/?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
};

class OAuth2MiroController {
  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.MIRO;
    const userId: number = userConnect.userId;

    try {
      const response = await axios.post(
        "https://api.miro.com/v1/oauth/token",
        querystring.stringify({
          grant_type: "authorization_code",
          code: code,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }),
      );
      await insertToken(
        response.data.access_token,
        response.data.access_token,
        +serviceId,
        +userId
      );
      res.status(200).send(JSON.parse(JSON.stringify(response.data)));
    } catch (err) {
      console.error(err);
    }
  }
}

export default OAuth2MiroController;