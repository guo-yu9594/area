import { enumReaction } from "../Elements/reactions";

const allFunctionReaction = new Map<enumReaction, string>();
allFunctionReaction.set(enumReaction.SEND_MAIL, "/reactions/send-mail");
allFunctionReaction.set(
  enumReaction.DISCORD_SEND_MESSAGE,
  "/reactions/discord-send-message"
);
allFunctionReaction.set(
  enumReaction.DISCORD_UPDATE_BOT_STATUS,
  "/reactions/discord-update-bot-status"
);
allFunctionReaction.set(
  enumReaction.DISCORD_CREATE_TEXT_CHANNEL,
  "/reactions/discord-create-text-channel"
);
allFunctionReaction.set(
  enumReaction.DISCORD_CREATE_VOICE_CHANNEL,
  "/reactions/discord-create-voice-channel"
);
allFunctionReaction.set(
  enumReaction.SLACK_PUBLISH_MESSAGE,
  "/reactions/slack-publish-message"
);

allFunctionReaction.set(
  enumReaction.MIRO_CREATE_BOARD,
  "/reactions/miro-createBoard"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_ITEM,
  "/reactions/miro-deleteItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_CREATE_APP_CARD_ITEM,
  "/reactions/miro-createAppCardItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_APP_CARD_ITEM,
  "/reactions/miro-deleteAppCardItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_CREATE_CARD_ITEM,
  "/reactions/miro-createCardItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_CARD_ITEM,
  "/reactions/miro-deleteCardItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_CONNECTOR,
  "/reactions/miro-deleteConnector"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_DOCUMENT_ITEM,
  "/reactions/miro-deleteDocumentItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_EMBED_ITEM,
  "/reactions/miro-deleteEmbedItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_IMAGE_ITEM,
  "/reactions/miro-deleteImageItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_SHAPE_ITEM,
  "/reactions/miro-deleteShapeItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_CREATE_STICKY_NOTE_ITEM,
  "/reactions/miro-createStickyNoteItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_STICKY_NOTE_ITEM,
  "/reactions/miro-deleteStickyNoteItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_CREATE_TEXT_ITEM,
  "/reactions/miro-createTextItem"
);
allFunctionReaction.set(
  enumReaction.MIRO_DELETE_TEXT_ITEM,
  "/reactions/miro-deleteTextItem"
);
allFunctionReaction.set(
  enumReaction.SLACK_CREATE_CONVERSATION,
  "/reactions/slack-create-conversation"
);
allFunctionReaction.set(
  enumReaction.SLACK_RENAME_CONVERSATION,
  "/reactions/slack-rename-conversation"
);
allFunctionReaction.set(
  enumReaction.SLACK_ARCHIVE_CONVERSATION,
  "/reactions/slack-archive-conversation"
);
allFunctionReaction.set(
  enumReaction.SLACK_REACT_MESSAGE,
  "/reactions/slack-react-message"
);
allFunctionReaction.set(
  enumReaction.SLACK_UNARCHIVE_CONVERSATION,
  "/reactions/slack-unarchive-conversation"
);
allFunctionReaction.set(
  enumReaction.SLACK_DELETE_MESSAGE,
  "/reactions/slack-delete-message"
);
allFunctionReaction.set(
  enumReaction.SLACK_UPDATE_MESSAGE,
  "/reactions/slack-update-message"
);
allFunctionReaction.set(
  enumReaction.SLACK_MARK_CONVERSATION,
  "/reactions/slack-mark-conversation"
);
allFunctionReaction.set(
  enumReaction.SLACK_REMOVE_REACTION,
  "/reactions/slack-remove-reaction"
);
allFunctionReaction.set(
  enumReaction.SLACK_SET_CONVERSATION_TOPIC,
  "/reactions/slack-set-conversation-topic"
);
allFunctionReaction.set(
  enumReaction.SLACK_SET_CONVERSATION_PURPOSE,
  "/reactions/slack-set-conversation-purpose"
);

allFunctionReaction.set(
  enumReaction.MIRO_CREATE_SHAPE_ITEM,
  "/reactions/miro-createShapeItem"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_CREATE_COLLECTION,
  "/reactions/unsplash-create-collection"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_UPDATE_COLLECTION,
  "/reactions/unsplash-update-collection"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_DELETE_COLLECTION,
  "/reactions/unsplash-delete-collection"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_LIKE_PHOTO,
  "/reactions/unsplash-like-photo"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_UNLIKE_PHOTO,
  "/reactions/unsplash-unlike-photo"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_ADD_PHOTO_TO_COLLECTION,
  "/reactions/unsplash-add-photo-to-collection"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_REMOVE_PHOTO_FROM_COLLECTION,
  "/reactions/unsplash-remove-photo-from-collection"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_UPDATE_PHOTO,
  "/reactions/unsplash-update-photo"
);
allFunctionReaction.set(
  enumReaction.UNSPLASH_UPDATE_PROFILE,
  "/reactions/unsplash-update-profile"
);


export { allFunctionReaction };
