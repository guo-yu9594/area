import jwt from "jsonwebtoken";
import { Response } from "express";
import { OAuth2Client } from "google-auth-library";

const secret = "my-secret-key";
const client = new OAuth2Client(process.env.GOOGLE_ID);

const isConnect = (req: any, res: Response, next: any) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized request" });
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const isConnectGoogle = async (req: any, res: Response, next: any) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized request" });
    }
    const ticket = await client.getTokenInfo(token);
    req.user = {
      email: ticket.email
    }
    next();
  } catch (error) {
    return res.status(401).send(error);
  }
};

export { isConnect, isConnectGoogle };
