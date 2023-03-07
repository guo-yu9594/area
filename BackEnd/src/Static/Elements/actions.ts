import { PrismaClient } from "@prisma/client";
import { enumServices, enumServicesAuth } from "./services";

const prisma = new PrismaClient();

export enum enumAction {
  EVENT_CALENDAR = 1,
  BELOW_0_WEATHER = 2,
  DRIVE_CHANGE = 3,
  YOUTUBE_SUBSCRIBERCOUNT = 4,
  YOUTUBE_VIEWCOUNT = 5,
  SHEET_CHANGE = 6,
  DOCS_CHANGE = 7,
  DISCORD_CAUGHT_MESSAGE = 8,
  SPOTIFY_CHANGE_PLAYLIST = 9,
  TWITCH_SUBSCRITION = 10,
  TWITCH_CHANGE_GAME = 11,
  TWITCH_IS_LIVE = 12,
  TWITCH_CHANGE_TITLE = 13,
  DROPBOX_CHANGE_FILE = 14,
  REDDIT_CHANGE_SUB = 15,
  MIRO_GET_BOARD = 16,
  MIRO_GET_ITEMS_BOARD = 17,
  MIRO_GET_SPECIFIC_ITEMS_BOARD = 18,
  MIRO_GET_APP_CARD_ITEM = 19,
  MIRO_GET_CARD_ITEM = 20,
  MIRO_GET_CONNECTORS = 21,
  MIRO_GET_SPECIFIC_CONNECTORS = 22,
  MIRO_GET_DOCUMENT_ITEM = 23,
  MIRO_GET_EMBED_ITEM = 24,
  MIRO_GET_IMAGE_ITEM = 25,
  MIRO_GET_SHAPE_ITEM = 26,
  MIRO_STICKY_NOTE_ITEM = 27,
  MIRO_GET_TEXT_ITEM = 28,
  REDDIT_CHANGE_COMMENT = 29,
  REDDIT_CHANGE_UPVOTED = 30,
  REDDIT_CHANGE_DOWNVOTED = 31,
  GITHUB_CHECK_PUSH = 32,
  GITHUB_NEW_BRANCH = 33,
  GITHUB_DELETE_BRANCH = 34,
  GITHUB_ISSUES = 35,
  GITHUB_LABEL = 36,
  GITHUB_MILESTONES = 37,
  GITHUB_PULL_REQUEST = 38,
  GITHUB_PULL_REQUEST_REVIEWS = 39,
  GITHUB_PULL_REQUEST_COMMENTS = 40,
  GITHUB_RELEASE = 41,
  GITHUB_VISIBILITY_CHANGES = 42,
  GITHUB_ISSUES_COMMENTS = 43,
}

async function insertAction(
  id: number,
  serviceId: number,
  title: string,
  description: string,
  serviceOauth: number,
  extraData: any
) {
  const action = await prisma.action.findFirst({
    where: {
      id: id,
    },
  });
  if (!action) {
    await prisma.action.create({
      data: {
        id: id,
        serviceId: serviceId,
        title: title,
        description: description,
        authId: serviceOauth,
        extraData: extraData,
      },
    });
  }
}

export async function CallInsertAction() {
  // ACTION LINK TO SERVICE CALENDAR
  insertAction(enumAction.EVENT_CALENDAR, enumServices.CALENDAR, "Calendar: Event", "adada", enumServicesAuth.GOOGLE, { "nbFields": 1, "idEvent": "idEvent" });
  insertAction(enumAction.BELOW_0_WEATHER, enumServices.WEATHER, "Weather: Temperature is below 0 degrees C", "", enumServicesAuth.NOTHING, {});
  insertAction(enumAction.DRIVE_CHANGE, enumServices.DRIVE, "Drive: Change", "Check if in your drive has change", enumServicesAuth.GOOGLE, {})
  insertAction(enumAction.YOUTUBE_SUBSCRIBERCOUNT, enumServices.YOUTUBE, "Youtube: Subcriber Count", "Check if your account has x subcriber", enumServicesAuth.GOOGLE, { "nbFields": 2, "idAcount": "idAcount", "nbSubcriber": "nbSubcriber" })
  insertAction(enumAction.YOUTUBE_VIEWCOUNT, enumServices.YOUTUBE, "Youtube: View Count", "Check if your video has x Viewer", enumServicesAuth.GOOGLE, { "nbFields": 2, "idVideo": "idVideo", "nbViewer": "nbViewer" })
  insertAction(enumAction.SHEET_CHANGE, enumServices.SHEET, "Sheet: Change", "Check if your sheeh has change", enumServicesAuth.GOOGLE, { "nbFields": 1, "idSheet": "idSheet" })
  insertAction(enumAction.DOCS_CHANGE, enumServices.DOCS, "Docs: Change", "Check if your sheet has been change", enumServicesAuth.GOOGLE, { "nbFields": 1, "idDocument": "idDocument" })
  insertAction(enumAction.DISCORD_CAUGHT_MESSAGE, enumServices.DISCORD, "Discord: caught message", "Check if you sent a message", enumServicesAuth.DISCORD, { "nbFields": 0 })
  insertAction(enumAction.SPOTIFY_CHANGE_PLAYLIST, enumServices.SPOTIFY, "Spotify: Playlist change", "Check if your playlist has been changed", enumServicesAuth.SPOTIFY, { "nbFields": 0 })
  insertAction(enumAction.TWITCH_SUBSCRITION, enumServices.TWITCH, "Twitch: Check New subcriber", "", enumServicesAuth.TWITCH, { "nbFields": 1, "chanelName": "chanelName" })
  insertAction(enumAction.TWITCH_CHANGE_GAME, enumServices.TWITCH, "Twitch: Check live game", "", enumServicesAuth.TWITCH, { "nbFields": 1, "chanelName": "chanelName" })
  insertAction(enumAction.TWITCH_IS_LIVE, enumServices.TWITCH, "Twitch: Check if chanel is on live", "", enumServicesAuth.TWITCH, { "nbFields": 1, "chanelName": "chanelName" })
  insertAction(enumAction.TWITCH_CHANGE_TITLE, enumServices.TWITCH, "Twitch: Check if title has been change", "", enumServicesAuth.TWITCH, { "nbFields": 1, "chanelName": "chanelName" })
  insertAction(enumAction.DROPBOX_CHANGE_FILE, enumServices.DROPBOX, "Dropbox: Check if file has been change", "", enumServicesAuth.DROPBOX, { "nbFields": 0 })
  insertAction(enumAction.MIRO_GET_BOARD, enumServices.MIRO, "Miro: get board", "", enumServicesAuth.MIRO, { "nbFields": 0 })
  insertAction(enumAction.MIRO_GET_ITEMS_BOARD, enumServices.MIRO, "Miro: get items board", "", enumServicesAuth.MIRO, { "nbFields": 1, "boardId": "boardId" })
  insertAction(enumAction.MIRO_GET_SPECIFIC_ITEMS_BOARD, enumServices.MIRO, "Miro: get specific items board", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.MIRO_GET_APP_CARD_ITEM, enumServices.MIRO, "Miro: get app card item", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.MIRO_GET_CARD_ITEM, enumServices.MIRO, "Miro: get card item", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.MIRO_GET_CONNECTORS, enumServices.MIRO, "Miro: get connectors", "", enumServicesAuth.MIRO, { "nbFields": 1, "boardId": "boardId" })
  insertAction(enumAction.MIRO_GET_SPECIFIC_CONNECTORS, enumServices.MIRO, "Miro: get specific connectors", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "connectorId": "connectorId" })
  insertAction(enumAction.MIRO_GET_DOCUMENT_ITEM, enumServices.MIRO, "Miro: get document item", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.MIRO_GET_EMBED_ITEM, enumServices.MIRO, "Miro: get embed item", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.MIRO_GET_IMAGE_ITEM, enumServices.MIRO, "Miro: get image item", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.MIRO_GET_SHAPE_ITEM, enumServices.MIRO, "Miro: get shape item", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.MIRO_STICKY_NOTE_ITEM, enumServices.MIRO, "Miro: get sticky note item", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.MIRO_GET_TEXT_ITEM, enumServices.MIRO, "Miro: get text item", "", enumServicesAuth.MIRO, { "nbFields": 2, "boardId": "boardId", "itemId": "itemId" })
  insertAction(enumAction.REDDIT_CHANGE_SUB, enumServices.REDDIT, "Reddit: Check new post in chosen subreddit", "", enumServicesAuth.REDDIT, { "nbFields": 1, "subreddit": "subreddit" })
  insertAction(enumAction.REDDIT_CHANGE_COMMENT, enumServices.REDDIT, "Reddit: Check new comment by chosen user", "", enumServicesAuth.REDDIT, { "nbFields": 1, "user": "user" });
  insertAction(enumAction.REDDIT_CHANGE_UPVOTED, enumServices.REDDIT, "Reddit: Check if user has upvoted", "", enumServicesAuth.REDDIT, { "nbFields": 1, "user": "user" });
  insertAction(enumAction.REDDIT_CHANGE_DOWNVOTED, enumServices.REDDIT, "Reddit: Check if user has downvoted", "", enumServicesAuth.REDDIT, { "nbFields": 1, "user": "user" });
  insertAction(
    enumAction.GITHUB_CHECK_PUSH,
    enumServices.GITHUB,
    "Github: check push",
    "Git push to a repository.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_NEW_BRANCH,
    enumServices.GITHUB,
    "Github: new branch",
    "Branch or tag created. ",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_DELETE_BRANCH,
    enumServices.GITHUB,
    "Github: delete branch",
    "Branch or tag deleted.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_ISSUES,
    enumServices.GITHUB,
    "Github: issues",
    "Issue opened, edited, deleted, transferred, pinned, unpinned, closed, reopened, assigned, unassigned, labeled, unlabeled, milestoned, demilestoned, locked, or unlocked.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_LABEL,
    enumServices.GITHUB,
    "Github: label",
    "Label created, edited or deleted.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_MILESTONES,
    enumServices.GITHUB,
    "Github: milestones",
    "Milestone created, closed, opened, edited, or deleted.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_PULL_REQUEST,
    enumServices.GITHUB,
    "Github: pull request",
    "Pull request assigned, auto merge disabled, auto merge enabled, closed, converted to draft, demilestoned, dequeued, edited, enqueued, labeled, locked, milestoned, opened, ready for review, reopened, review request removed, review requested, synchronized, unassigned, unlabeled, or unlocked. ",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_PULL_REQUEST_REVIEWS,
    enumServices.GITHUB,
    "Github: pull request reviews",
    "Pull request review submitted, edited, or dismissed.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_PULL_REQUEST_COMMENTS,
    enumServices.GITHUB,
    "Github: pull request comments",
    "Pull request diff comment created, edited, or deleted.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_RELEASE,
    enumServices.GITHUB,
    "Github: release",
    "Release created, edited, published, unpublished, or deleted.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_VISIBILITY_CHANGES,
    enumServices.GITHUB,
    "Github: visibility changes",
    "Repository changes from private to public.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
  insertAction(
    enumAction.GITHUB_ISSUES_COMMENTS,
    enumServices.GITHUB,
    "Github: issues comments",
    "Issue comment created, edited, or deleted.",
    enumServicesAuth.GITHUB,
    { nbFields: 0 }
  );
}
