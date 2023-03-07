import express, { } from "express";
import { isConnectGoogle } from "../../../Middlewares/auth";
import YoutubeAController from "../../../Controllers/Actions/Google/youtubeAController";

const app = express();
const youtubeAController = new YoutubeAController();


app.get("/subscriber-count", isConnectGoogle, youtubeAController.subscriberCount);
app.get("/viewer-count", isConnectGoogle, youtubeAController.viewerCount);

export default app;