import express, { Request, Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";
import querystring from "querystring";

const CLIENT_ID = process.env.NOTION_ID;
const CLIENT_SECRET = process.env.NOTION_SECRET;
const REDIRECT_URI = "http://localhost:8081/auth/notion/redirect";

export const getNotionOAuthURL = () => {
  return (
    "https://api.notion.com/v1/oauth/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: CLIENT_ID,
      owner: "user",
      redirect_uri: REDIRECT_URI,
    })
  );
};

class OAuth2NotionController {

  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.NOTION;
    const userId: number = userConnect.userId;

    try {
      const response = await axios.post(
        "https://api.notion.com/v1/oauth/token",
        querystring.stringify({
          grant_type: "authorization_code",
          code: code,
          redirect_uri: REDIRECT_URI,
        }),
        {
          headers: {
            Authorization: `Basic ${new Buffer(
              `${CLIENT_ID}:${CLIENT_SECRET}`
            ).toString("base64")}`,
          },
        }
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

export default OAuth2NotionController;