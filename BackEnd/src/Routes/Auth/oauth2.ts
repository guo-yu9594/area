import express from "express";
import { isConnect } from "../../Middlewares/auth";
import OAuth2DiscordController from "../../Controllers/Auth/oauth2DiscordController";
import OAuth2NotionController from "../../Controllers/Auth/oauth2NotionController";
import OAuth2SpotifyController from "../../Controllers/Auth/oauth2SpotifyController";
import OAuth2TwitchController from "../../Controllers/Auth/oauth2TwitchController";
import OAuth2RedditController from "../../Controllers/Auth/oauth2RedditController";
import OAuth2DropboxController from "../../Controllers/Auth/oauth2DropboxController";
import OAuth2SlackController from "../../Controllers/Auth/oauth2SlackController";
import OAuth2MiroController from "../../Controllers/Auth/oauthMiroController";
import OAuth2GithubController from "../../Controllers/Auth/oauth2GIthubController";
import OAuth2UnsplashController from "../../Controllers/Auth/oauth2UnsplashController";

const oauth2 = express();
const oauth2NotionController = new OAuth2NotionController();
const oauth2DiscordController = new OAuth2DiscordController();
const oauth2SpotifyController = new OAuth2SpotifyController();
const oauth2TwitchController = new OAuth2TwitchController();
const oauth2RedditController = new OAuth2RedditController();
const oauth2DropboxController = new OAuth2DropboxController();
const oauth2SlackController = new OAuth2SlackController();
const oauth2MiroController = new OAuth2MiroController();
const oauth2GithubController = new OAuth2GithubController();
const oauth2UnsplashbController = new OAuth2UnsplashController();

oauth2.get("/discord/redirect", isConnect, oauth2DiscordController.redirect);
oauth2.get("/notion/redirect", isConnect, oauth2NotionController.redirect);
oauth2.get("/spotify/redirect", isConnect, oauth2SpotifyController.redirect);
oauth2.get("/twitch/redirect", isConnect, oauth2TwitchController.redirect);
oauth2.get("/reddit/redirect", isConnect, oauth2RedditController.redirect);
oauth2.get("/dropbox/redirect", isConnect, oauth2DropboxController.redirect);
oauth2.get("/slack/redirect", isConnect, oauth2SlackController.redirect);
oauth2.get("/miro/redirect", isConnect, oauth2MiroController.redirect);
oauth2.get("/github/redirect", isConnect, oauth2GithubController.redirect);
oauth2.get("/unsplash/redirect", isConnect, oauth2UnsplashbController.redirect);

export default oauth2;
