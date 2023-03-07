import { enumAction } from "../Elements/actions";

const allFunctionAction = new Map<enumAction, string>();
allFunctionAction.set(enumAction.EVENT_CALENDAR, "/actions/calendar-event");
allFunctionAction.set(enumAction.BELOW_0_WEATHER, "/actions/weather-belowzero");
allFunctionAction.set(enumAction.DRIVE_CHANGE, "/actions/drive-change");
allFunctionAction.set(
  enumAction.YOUTUBE_SUBSCRIBERCOUNT,
  "/actions/subscriber-count"
);
allFunctionAction.set(enumAction.YOUTUBE_VIEWCOUNT, "/actions/viewer-count");
allFunctionAction.set(enumAction.SHEET_CHANGE, "/actions/sheet-change");
allFunctionAction.set(enumAction.DOCS_CHANGE, "/actions/docs-change");
allFunctionAction.set(
  enumAction.DISCORD_CAUGHT_MESSAGE,
  "/actions/discord-caught-message"
);
allFunctionAction.set(
  enumAction.SPOTIFY_CHANGE_PLAYLIST,
  "/actions/change-playlist"
);
allFunctionAction.set(enumAction.TWITCH_SUBSCRITION, "/actions/check-subcription")
allFunctionAction.set(enumAction.TWITCH_CHANGE_GAME, "/actions/check-change-game")
allFunctionAction.set(enumAction.TWITCH_IS_LIVE, "/actions/check-is-live")
allFunctionAction.set(enumAction.TWITCH_CHANGE_TITLE, "/actions/check-change-title")
allFunctionAction.set(enumAction.DROPBOX_CHANGE_FILE, "/actions/change-file")

allFunctionAction.set(enumAction.REDDIT_CHANGE_SUB, "/actions/change-sub")
allFunctionAction.set(enumAction.REDDIT_CHANGE_COMMENT, "/actions/change-comment")
allFunctionAction.set(enumAction.REDDIT_CHANGE_UPVOTED, "/actions/change-upvoted")
allFunctionAction.set(enumAction.REDDIT_CHANGE_DOWNVOTED, "/actions/change-downvoted")

allFunctionAction.set(enumAction.MIRO_GET_BOARD, "/actions/get-board")
allFunctionAction.set(enumAction.MIRO_GET_ITEMS_BOARD, "/actions/get-itemsboard")
allFunctionAction.set(enumAction.MIRO_GET_SPECIFIC_ITEMS_BOARD, "/actions/get-specificitemsboard")
allFunctionAction.set(enumAction.MIRO_GET_APP_CARD_ITEM, "/actions/get-appcarditem")
allFunctionAction.set(enumAction.MIRO_GET_CARD_ITEM, "/actions/get-carditem")
allFunctionAction.set(enumAction.MIRO_GET_CONNECTORS, "/actions/get-connectors")
allFunctionAction.set(enumAction.MIRO_GET_SPECIFIC_ITEMS_BOARD, "/actions/get-specificconnector")
allFunctionAction.set(enumAction.MIRO_GET_DOCUMENT_ITEM, "/actions/get-documentitem")
allFunctionAction.set(enumAction.MIRO_GET_EMBED_ITEM, "/actions/get-embeditem")
allFunctionAction.set(enumAction.MIRO_GET_IMAGE_ITEM, "/actions/get-imageitem")
allFunctionAction.set(enumAction.MIRO_GET_SHAPE_ITEM, "/actions/get-shapeitem")
allFunctionAction.set(enumAction.MIRO_STICKY_NOTE_ITEM, "/actions/get-stickynoteitem")
allFunctionAction.set(enumAction.MIRO_GET_TEXT_ITEM, "/actions/get-textitem")
allFunctionAction.set(enumAction.GITHUB_CHECK_PUSH, "/actions/github-check-push");
allFunctionAction.set(enumAction.GITHUB_NEW_BRANCH, "/actions/github-new-branch");
allFunctionAction.set(enumAction.GITHUB_DELETE_BRANCH, "/actions/github-delete-branch");
allFunctionAction.set(enumAction.GITHUB_ISSUES, "/actions/github-issues");
allFunctionAction.set(enumAction.GITHUB_LABEL, "/actions/github-label");
allFunctionAction.set(enumAction.GITHUB_MILESTONES, "/actions/github-milestones");
allFunctionAction.set(enumAction.GITHUB_PULL_REQUEST, "/actions/github-pull-request");
allFunctionAction.set(enumAction.GITHUB_PULL_REQUEST_REVIEWS, "/actions/github-pull-request-reviews");
allFunctionAction.set(enumAction.GITHUB_PULL_REQUEST_COMMENTS, "/actions/github-pull-request-comments");
allFunctionAction.set(enumAction.GITHUB_RELEASE, "/actions/github-release");
allFunctionAction.set(enumAction.GITHUB_VISIBILITY_CHANGES, "/actions/github-visibility-changes");
allFunctionAction.set(enumAction.GITHUB_ISSUES_COMMENTS, "/actions/github-issues-comments");

export { allFunctionAction };
