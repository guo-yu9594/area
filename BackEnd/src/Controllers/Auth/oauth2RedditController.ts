import express, { Request, Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";
import querystring from "querystring";

const CLIENT_ID = process.env.REDDIT_ID;
const CLIENT_SECRET = process.env.REDDIT_SECRET;
const REDIRECT_URI = "http://localhost:8081/auth/reddit/redirect";

const generateRandomString = (lenght: number) => {
  let text = "";
  const letter = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuioqsdfghjklmwxcvbn123456789";

  for (let i = 0; i < lenght; i++) {
    text += letter.charAt(Math.floor(Math.random() * letter.length));
  }
  return text;
};

export const getRedditOAuthURL = () => {
  const state = generateRandomString(16);
  const scope = "identity edit flair history read vote wikiread wikiedit";

  return (
    "https://www.reddit.com/api/v1/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      state: state,
      duration: "permanent",
      scope: scope,
    })
  );
};

class OAuth2RedditController {

  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.REDDIT;
    const userId: number = userConnect.userId;

    try {
      const response = await axios.post(
        "https://www.reddit.com/api/v1/access_token",
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

export default OAuth2RedditController;