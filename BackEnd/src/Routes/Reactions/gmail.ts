import express, { Request, Response } from "express";
import dotenv from "dotenv";
import Gmail from "../../Services/Google/gmail";
import GmailRController from "../../Controllers/Reactions/Google/gmailRController";

const app = express();
const gmailRController = new GmailRController();

dotenv.config();

app.get("/send-mail", gmailRController.sendMail);

export default app;
