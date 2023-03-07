import express, { } from "express";
import DiscordRController from "../../Controllers/Reactions/discordRController";

const discordReactions = express();
const discordRController = new DiscordRController();

discordReactions.get("/discord-send-message", discordRController.sendMessage);

discordReactions.get("/discord-update-bot-status", discordRController.updateBotStatus);

discordReactions.get("/discord-create-text-channel", discordRController.createTextChannel);

discordReactions.get("/discord-create-voice-channel", discordRController.createVoiceChannel);

export default discordReactions;
