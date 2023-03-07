import express, { Response } from "express";
import DropboxController from "../../Controllers/Actions/dropboxAController";

const app = express();
const dropboxController = new DropboxController();

app.get("/change-file", dropboxController.ChangeFile);

export default app;
