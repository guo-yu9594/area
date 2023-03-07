import express, { } from "express";
import { google } from "googleapis";
import { isConnectGoogle } from "../../../Middlewares/auth";
import DocsAController from "../../../Controllers/Actions/Google/docsAController";

const app = express();
const docsAController = new DocsAController();


app.get("/docs-change", isConnectGoogle, docsAController.docsChange);

export default app;
