import { Response } from "express";
import { enumServices } from "../../Static/Elements/services";
import { insertToken } from "../../Utils/tokens";
import axios from "axios";

const GITHUB_OAUTH2_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_OAUTH2_TOKEN_URL = "https://github.com/login/oauth/access_token";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_REDIRECT_URL = process.env.GITHUB_REDIRECT_URI;

export function getGithubOAuthURL() {
  return `${GITHUB_OAUTH2_AUTHORIZE_URL}?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URL}`;
}

const exchangeCodeForToken = async (code: string) => {
  const data = {
    client_id: GITHUB_CLIENT_ID,
    client_secret: GITHUB_CLIENT_SECRET,
    code: code,
    redirect_uri: GITHUB_REDIRECT_URL,
  };

  try {
    const response = await axios.post(GITHUB_OAUTH2_TOKEN_URL, data, {
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

class OAuth2GithubController {
  public async redirect(req: any, res: Response) {
    const userConnect = await req.user;
    const code: string = req.query.code as string;
    const serviceId: number = enumServices.GITHUB;
    const userId: number = userConnect.userId;

    try {
      const data = await exchangeCodeForToken(code);
      await insertToken(data.access_token, "", +serviceId, +userId);
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default OAuth2GithubController;
