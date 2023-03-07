import express, { Response } from "express";
import TwitchAController from "../../Controllers/Actions/twitchAController";

const app = express();
const twitchAController = new TwitchAController()

app.get("/check-subcription", twitchAController.CheckSubscription);
app.get("/check-change-game", twitchAController.checkChangeGame)
app.get("/check-is-live", twitchAController.CheckIsOnLive)
app.get("/check-change-title", twitchAController.CheckChangeTitle)

export default app;
