import express, { Request, Response } from "express";
import Discord from "../../Services/discord";
import DiscordAController from "../../Controllers/Actions/discordAController";

const discordActions = express();
const discordAController = new DiscordAController();

discordActions.get("/discord-caught-message", discordAController.caughtMessage);

export default discordActions;
