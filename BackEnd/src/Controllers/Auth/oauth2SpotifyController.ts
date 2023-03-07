import express, { Request, Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";
import querystring from "querystring";

const CLIENT_ID = process.env.SPOTIFY_ID;
const CLIENT_SECRET = process.env.SPOTIFY_SECRET;
const REDIRECT_URI = "http://localhost:8081/auth/spotify/redirect";

const generateRandomString = (lenght: number) => {
  let text = "";
  const letter = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuioqsdfghjklmwxcvbn123456789";

  for (let i = 0; i < lenght; i++) {
    text += letter.charAt(Math.floor(Math.random() * letter.length));
  }
  return text;
};

export const getSpotifyOAuthURL = () => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  return (
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI,
      state: state,
    })
  );
};


class OAuth2SpotifyController {

  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.SPOTIFY;
    const userId: number = userConnect.userId;

    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
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

export default OAuth2SpotifyController;