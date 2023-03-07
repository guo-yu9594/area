import { PrismaClient } from "@prisma/client";
import { getGoogleOAuthURL } from "../../Routes/Auth/oauth2Google";
import { getDiscordOAuthURL } from "../../Controllers/Auth/oauth2DiscordController";
import { getSpotifyOAuthURL } from "../../Controllers/Auth/oauth2SpotifyController";
import { getNotionOAuthURL } from "../../Controllers/Auth/oauth2NotionController";
import { getTwitchOAuthURL } from "../../Controllers/Auth/oauth2TwitchController";
import { getRedditOAuthURL } from "../../Controllers/Auth/oauth2RedditController";
import { getDropboxOAuthURL } from "../../Controllers/Auth/oauth2DropboxController";
import { getMiroOAuthURL } from "../../Controllers/Auth/oauthMiroController";
import { getSlackOAuthURL } from "../../Controllers/Auth/oauth2SlackController";
import { getGithubOAuthURL } from "../../Controllers/Auth/oauth2GIthubController";
import { getUnsplashOAuthURL } from "../../Controllers/Auth/oauth2UnsplashController";

const prisma = new PrismaClient();

export enum enumServicesAuth {
  NOTHING = 0,
  GOOGLE = 1,
  DISCORD = 7,
  SPOTIFY = 9,
  NOTION = 10,
  TWITCH = 11,
  DROPBOX = 12,
  REDDIT = 13,
  SLACK = 14,
  MIRO = 15,
  GITHUB = 16,
  UNSPLASH = 17,
}

export enum enumServices {
  CALENDAR = 1,
  WEATHER = 2,
  DRIVE = 3,
  GMAIL = 4,
  YOUTUBE = 5,
  SHEET = 6,
  DISCORD = 7,
  DOCS = 8,
  SPOTIFY = 9,
  NOTION = 10,
  TWITCH = 11,
  DROPBOX = 12,
  REDDIT = 13,
  SLACK = 14,
  MIRO = 15,
  GITHUB = 16,
  UNSPLASH = 17,
}

export const servicesURL = [
  getGoogleOAuthURL, // 1 CALENDAR
  getGoogleOAuthURL, // 2 WEATHER
  getGoogleOAuthURL, // 3 DRIVE
  getGoogleOAuthURL, // 4 GMAIL
  getGoogleOAuthURL, // 5 YOUTUBE
  getGoogleOAuthURL, // 6 SHEET
  getDiscordOAuthURL, // 7 DISCORD
  getGoogleOAuthURL, // 8 DOCS
  getSpotifyOAuthURL, // 9 SPOTIFY
  getNotionOAuthURL, // 10 NOTION
  getTwitchOAuthURL, // 11 TWITCH
  getDropboxOAuthURL, // 12 DROPBOX
  getRedditOAuthURL, // 13 REDDIT
  getSlackOAuthURL, // 14 SLACK
  getMiroOAuthURL, // 15 MIRO
  getGithubOAuthURL, // 16 GITHUB
  getUnsplashOAuthURL, // 17 UNSPLASH
];

async function insertService(
  id: number,
  title: string,
  description: string,
  logo: string
) {
  const services = await prisma.service.findFirst({
    where: {
      id: id,
    },
  });
  if (!services) {
    await prisma.service.create({
      data: {
        id: id,
        title: title,
        description: description,
        logo: logo,
      },
    });
  }
}

export async function CallInsertService() {
  insertService(
    enumServices.CALENDAR,
    "Calendar",
    "Check if calendar event has been passed",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"
  );
  insertService(
    enumServices.WEATHER,
    "Weather",
    "Check if temperature is less than 0 degrees Celsius",
    "https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-16.png"
  );
  insertService(
    enumServices.DRIVE,
    "Drive",
    "Check if has change in your drive",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/1200px-Google_Drive_logo.png"
  );
  insertService(
    enumServices.GMAIL,
    "Gmail",
    "Send email with gmail",
    "https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
  );
  insertService(
    enumServices.YOUTUBE,
    "Youtube",
    "Check if has change in chanel or video youtube",
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
  );
  insertService(
    enumServices.SHEET,
    "Sheet",
    "Check if has change in your sheet",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/800px-Google_Sheets_logo_%282014-2020%29.svg.png"
  );
  insertService(
    enumServices.DISCORD,
    "Discord",
    "Communication service based on server and channel",
    "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png"
  );
  insertService(
    enumServices.DOCS,
    "Docs",
    "Check if has change in your docs",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png"
  );
  insertService(
    enumServices.SPOTIFY,
    "Spotify",
    "",
    "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
  );
  insertService(
    enumServices.NOTION,
    "Notion",
    "",
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
  );
  insertService(
    enumServices.TWITCH,
    "Twitch",
    "",
    "https://www.freepnglogos.com/uploads/twitch-app-logo-png-3.png"
  );
  insertService(
    enumServices.DROPBOX,
    "Dropbox",
    "",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2202px-Dropbox_Icon.svg.png"
  );
  insertService(
    enumServices.REDDIT,
    "Reddit",
    "",
    "https://www.redditinc.com/assets/images/site/reddit-logo.png"
  );
  insertService(
    enumServices.SLACK,
    "Slack",
    "",
    "https://companieslogo.com/img/orig/WORK-d00db09e.png?t=1596660196"
  );
  insertService(
    enumServices.MIRO,
    "Miro",
    "",
    "https://softwarereviews.s3.amazonaws.com/production/favicons/offerings/8945/original/miro-logo.png"
  );
  insertService(
    enumServices.GITHUB,
    "Github",
    "",
    "https://cdn-icons-png.flaticon.com/512/25/25231.png"
  );
  insertService(
    enumServices.UNSPLASH,
    "Unsplash",
    "",
    "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/15/a6/45/15a645ce-7e0e-10d8-b5cc-5f1689871c14/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/1200x630bb.png"
  );
}
