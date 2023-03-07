import { Router } from "express";
import { calendar } from "./Actions/Google/calendar";
import { drive } from "./Actions/Google/drive";

import auth from "./Auth/auth";
import oauth2Google from "./Auth/oauth2Google";
import routerDb from "./Elements/elements";
import routerArea from "./Elements/areas";
import SendEmail from "./Reactions/gmail";
import about from "./Elements/about";
import weather from "./Actions/weather";
import sheet from "./Actions/Google/sheet";
import youtube from "./Actions/Google/youtube";
import serviceAuth from "./Services/auth";
import discordReactions from "./Reactions/discord";
import discordActions from "./Actions/discord";
import spotifyActions from "./Actions/spotify";
import oauth2 from "./Auth/oauth2";
import reddit from "./Actions/reddit";
import twitch from "./Actions/twitch";
import dropbox from "./Actions/dropbox";
import slackReactions from "./Reactions/slack";
import miroAction from "./Actions/miro";
import miroReactions from "./Reactions/miro";
import githubActions from "./Actions/github";
import unsplashReactions from "./Reactions/unsplash";
import {triggerRoute} from "../Trigger/trigger";

const router = Router();

router.use(
  "/actions",
  calendar,
  drive,
  weather,
  youtube,
  sheet,
  discordActions,
  spotifyActions,
  twitch,
  dropbox,
  reddit,
  miroAction,
  githubActions
);
router.use("/auth", auth, oauth2Google, oauth2);
router.use("/elements", routerDb);
router.use(
  "/reactions",
  SendEmail,
  discordReactions,
  slackReactions,
  miroReactions,
  unsplashReactions
);
router.use("/services", serviceAuth);
router.use("/", routerArea, about,  triggerRoute);

export default router;
