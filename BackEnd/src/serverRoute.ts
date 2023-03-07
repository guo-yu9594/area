import { Router } from "express";
import { calendar } from "./api/action/google/calendar";
import { drive } from "./api/action/google/drive";

import auth from "./api/auth/auth";
import oauth2 from "./api/auth/oAuth2Google";
import webHook from "./webHook/triggerWebHookGoogle";
import routerDb from "./api/elementsDB/getElemsDb";
import routerArea from "./api/elementsDB/cereateArea";
import SendEmail from "./api/reaction/gmail";
import about from "./api/about";
import weather from "./api/action/weather";
import sheet from "./api/action/google/sheet";
import discord from "./api/auth/OAuth2Discord";
import spotify from "./api/auth/oAuth2Spotify"
import youtube from "./api/action/google/youtube";
import servicesTokens from "./api/service/tokens"
import serviceAuth from "./api/service/auth";
import discordReactions from "./api/reaction/Discord";
import discordActions from "./api/action/Discord";
import OAuth2Github from "./api/auth/oAuth2Github";
import spotifyActions from "./api/action/Spotify";
import githubActions from "./api/action/Github";

const router = Router();

router.use("/auth", auth, oauth2, discord, spotify, OAuth2Github);
router.use("/webhook", webHook);
router.use("/actions", calendar, drive, weather, youtube, sheet, discordActions, spotifyActions, githubActions);
router.use("/reactions", SendEmail, discordReactions);
router.use("/elements", routerDb);
router.use("/", routerArea, about, servicesTokens);
router.use("/services", serviceAuth);

export default router;
