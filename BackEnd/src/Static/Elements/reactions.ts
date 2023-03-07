import { PrismaClient } from "@prisma/client";
import { enumServices, enumServicesAuth } from "./services";

const prisma = new PrismaClient();

export enum enumReaction {
  SEND_MAIL = 1,
  DISCORD_SEND_MESSAGE = 2,
  DISCORD_UPDATE_BOT_STATUS = 3,
  DISCORD_CREATE_TEXT_CHANNEL = 4,
  DISCORD_CREATE_VOICE_CHANNEL = 5,
  SLACK_PUBLISH_MESSAGE = 6,
  MIRO_CREATE_BOARD = 7,
  MIRO_DELETE_ITEM = 8,
  MIRO_CREATE_APP_CARD_ITEM = 9,
  MIRO_DELETE_APP_CARD_ITEM = 10,
  MIRO_CREATE_CARD_ITEM = 11,
  MIRO_DELETE_CARD_ITEM = 12,
  MIRO_DELETE_CONNECTOR = 13,
  MIRO_DELETE_DOCUMENT_ITEM = 14,
  MIRO_DELETE_EMBED_ITEM = 15,
  MIRO_DELETE_IMAGE_ITEM = 16,
  MIRO_CREATE_SHAPE_ITEM = 17,
  MIRO_DELETE_SHAPE_ITEM = 18,
  MIRO_CREATE_STICKY_NOTE_ITEM = 19,
  MIRO_DELETE_STICKY_NOTE_ITEM = 20,
  MIRO_CREATE_TEXT_ITEM = 21,
  MIRO_DELETE_TEXT_ITEM = 22,
  SLACK_CREATE_CONVERSATION = 23,
  SLACK_RENAME_CONVERSATION = 24,
  SLACK_ARCHIVE_CONVERSATION = 25,
  SLACK_REACT_MESSAGE = 26,
  SLACK_UNARCHIVE_CONVERSATION = 27,
  SLACK_DELETE_MESSAGE = 28,
  SLACK_UPDATE_MESSAGE = 29,
  SLACK_MARK_CONVERSATION = 30,
  SLACK_REMOVE_REACTION = 31,
  SLACK_SET_CONVERSATION_TOPIC = 32,
  SLACK_SET_CONVERSATION_PURPOSE = 33,
  UNSPLASH_CREATE_COLLECTION = 34,
  UNSPLASH_UPDATE_COLLECTION = 35,
  UNSPLASH_DELETE_COLLECTION = 36,
  UNSPLASH_LIKE_PHOTO = 37,
  UNSPLASH_UNLIKE_PHOTO = 38,
  UNSPLASH_ADD_PHOTO_TO_COLLECTION = 39,
  UNSPLASH_REMOVE_PHOTO_FROM_COLLECTION = 40,
  UNSPLASH_UPDATE_PHOTO = 41,
  UNSPLASH_UPDATE_PROFILE = 42,
}

async function insertReaction(
  id: number,
  serviceId: number,
  title: string,
  description: string,
  serviceOauth: number,
  extraData: any
) {
  const reaction = await prisma.reaction.findFirst({
    where: {
      id: id,
    },
  });
  if (!reaction) {
    await prisma.reaction.create({
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

export async function CallInsertReaction() {
  // REACTION LINK TO SERVICE CALENDAR
  insertReaction(
    enumReaction.SEND_MAIL,
    enumServices.GMAIL,
    "Gmail: send mail",
    "",
    enumServicesAuth.NOTHING,
    {
      nbFields: 3,
      to: "to",
      subject: "subject",
      text: "text",
    }
  );
  insertReaction(
    enumReaction.DISCORD_SEND_MESSAGE,
    enumServices.DISCORD,
    "Discord: send message",
    "Send a message to a discord server general channel",
    enumServicesAuth.NOTHING,
    { nbFields: 2, username: "username", content: "content" }
  );
  insertReaction(
    enumReaction.DISCORD_UPDATE_BOT_STATUS,
    enumServices.DISCORD,
    "Discord: update bot status",
    "Change the discord bot Area status",
    enumServicesAuth.NOTHING,
    { nbFields: 1, activity: "Activity" }
  );
  insertReaction(
    enumReaction.DISCORD_CREATE_TEXT_CHANNEL,
    enumServices.DISCORD,
    "Discord: create text channel",
    "Create a new text channel in the parent category named TEXT CHANNELS",
    enumServicesAuth.NOTHING,
    { nbFields: 1, name: "Channel Name" }
  );
  insertReaction(
    enumReaction.DISCORD_CREATE_VOICE_CHANNEL,
    enumServices.DISCORD,
    "Discord: create voice channel",
    "Create a new voice channel in the parent category named VOICE CHANNELS",
    enumServicesAuth.NOTHING,
    { nbFields: 1, name: "Channel Name" }
  );
  insertReaction(
    enumReaction.SLACK_PUBLISH_MESSAGE,
    enumServices.SLACK,
    "Slack: publish message",
    "Publish a custom message on a slack channel",
    enumServicesAuth.NOTHING,
    { nbFields: 1, message: "Message" }
  );
  insertReaction(
    enumReaction.MIRO_CREATE_BOARD,
    enumServices.MIRO,
    "Miro: create board",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 1, name: "name" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_ITEM,
    enumServices.MIRO,
    "Miro: delete item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 1, itemId: "itemId" }
  );
  insertReaction(
    enumReaction.MIRO_CREATE_APP_CARD_ITEM,
    enumServices.MIRO,
    "Miro: create app card item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 1, title: "title" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_APP_CARD_ITEM,
    enumServices.MIRO,
    "Miro: delete app card item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", itemId: "itemId" }
  );
  insertReaction(
    enumReaction.MIRO_CREATE_CARD_ITEM,
    enumServices.MIRO,
    "Miro: create card item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 1, title: "title" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_CARD_ITEM,
    enumServices.MIRO,
    "Miro: delete card item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", itemId: "itemId" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_CONNECTOR,
    enumServices.MIRO,
    "Miro: delete connector",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", connectorId: "connectorId" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_DOCUMENT_ITEM,
    enumServices.MIRO,
    "Miro: delete document item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", itemId: "itemId" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_EMBED_ITEM,
    enumServices.MIRO,
    "Miro: delete embed item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", itemId: "itemId" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_IMAGE_ITEM,
    enumServices.MIRO,
    "Miro: delete image item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", itemId: "itemId" }
  );
  insertReaction(
    enumReaction.MIRO_CREATE_SHAPE_ITEM,
    enumServices.MIRO,
    "Miro: create shape item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 1, boardId: "boardId" }
  );

  insertReaction(
    enumReaction.MIRO_DELETE_SHAPE_ITEM,
    enumServices.MIRO,
    "Miro: delete shape item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", itemId: "itemId" }
  );
  insertReaction(
    enumReaction.MIRO_CREATE_STICKY_NOTE_ITEM,
    enumServices.MIRO,
    "Miro: create sticky note item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 1, boardId: "boardId" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_STICKY_NOTE_ITEM,
    enumServices.MIRO,
    "Miro: delete sticky note item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", itemId: "itemId" }
  );
  insertReaction(
    enumReaction.MIRO_CREATE_TEXT_ITEM,
    enumServices.MIRO,
    "Miro: create text item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", content: "content" }
  );
  insertReaction(
    enumReaction.MIRO_DELETE_TEXT_ITEM,
    enumServices.MIRO,
    "Miro: delete test item",
    "",
    enumServicesAuth.MIRO,
    { nbFields: 2, boardId: "boardId", itemId: "itemId" }
  );
  insertReaction(
    enumReaction.SLACK_CREATE_CONVERSATION,
    enumServices.SLACK,
    "Slack: create conversation",
    "Create a new textual conversation on Slack",
    enumServicesAuth.NOTHING,
    { nbFields: 1, channelName: "Channel name" }
  );
  insertReaction(
    enumReaction.SLACK_RENAME_CONVERSATION,
    enumServices.SLACK,
    "Slack: rename conversation",
    "Rename a new textual conversation on Slack",
    enumServicesAuth.NOTHING,
    { nbFields: 1, channelId: "Channel ID", channelName: "Channel name" }
  );
  insertReaction(
    enumReaction.SLACK_ARCHIVE_CONVERSATION,
    enumServices.SLACK,
    "Slack: archive conversation",
    "Archive a new textual conversation on Slack",
    enumServicesAuth.NOTHING,
    { nbFields: 1, channelId: "Channel ID" }
  );
  insertReaction(
    enumReaction.SLACK_REACT_MESSAGE,
    enumServices.SLACK,
    "Slack: react message",
    "React on a message in a textual conversation on Slack",
    enumServicesAuth.NOTHING,
    {
      nbFields: 3,
      channelId: "Channel ID",
      messageId: "Message ID",
      emoji: "Emoji",
    }
  );
  insertReaction(
    enumReaction.SLACK_UNARCHIVE_CONVERSATION,
    enumServices.SLACK,
    "Slack: unarchive conversation",
    "Unarchive a new textual conversation on Slack",
    enumServicesAuth.NOTHING,
    { nbFields: 1, channelId: "Channel ID" }
  );
  insertReaction(
    enumReaction.SLACK_DELETE_MESSAGE,
    enumServices.SLACK,
    "Slack: delete message",
    "Delete a message in a textual conversation on Slack",
    enumServicesAuth.NOTHING,
    { nbFields: 2, channelId: "Channel ID", messageId: "Message ID" }
  );
  insertReaction(
    enumReaction.SLACK_UPDATE_MESSAGE,
    enumServices.SLACK,
    "Slack: update message",
    "Update a message in a textual conversation on Slack",
    enumServicesAuth.NOTHING,
    {
      nbFields: 3,
      channelId: "Channel ID",
      messageId: "Message ID",
      newMessage: "New message",
    }
  );
  insertReaction(
    enumReaction.SLACK_MARK_CONVERSATION,
    enumServices.SLACK,
    "Slack: mark conversation",
    "Mark a conversation on Slack",
    enumServicesAuth.NOTHING,
    { nbFields: 2, channelId: "Channel ID", messageId: "Message ID" }
  );
  insertReaction(
    enumReaction.SLACK_REMOVE_REACTION,
    enumServices.SLACK,
    "Slack: remove reaction",
    "Remove a reaction on a message in a textual conversation on Slack",
    enumServicesAuth.NOTHING,
    {
      nbFields: 3,
      channelId: "Channel ID",
      messageId: "Message ID",
      emoji: "Emoji",
    }
  );
  insertReaction(
    enumReaction.SLACK_SET_CONVERSATION_TOPIC,
    enumServices.SLACK,
    "Slack: set conversation topic",
    "Set a conversaztion topic in a textual conversation on Slack",
    enumServicesAuth.NOTHING,
    { nbFields: 2, channelId: "Channel ID", topic: "Topic" }
  );
  insertReaction(
    enumReaction.SLACK_SET_CONVERSATION_PURPOSE,
    enumServices.SLACK,
    "Slack: set conversation purpose",
    "Set a conversaztion purpose in a textual conversation on Slack",
    enumServicesAuth.NOTHING,
    { nbFields: 2, channelId: "Channel ID", purpose: "Purpose" }
  );
  insertReaction(
    enumReaction.UNSPLASH_CREATE_COLLECTION,
    enumServices.UNSPLASH,
    "Unsplash: create collection",
    "Create a new photos collection on your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 2, title: "Title", description: "Description" }
  );
  insertReaction(
    enumReaction.UNSPLASH_UPDATE_COLLECTION,
    enumServices.UNSPLASH,
    "Unsplash: update collection",
    "Udpate a photos collection on your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 3, collectionId: "Collection ID", title: "Title", description: "Description" }
  );
  insertReaction(
    enumReaction.UNSPLASH_DELETE_COLLECTION,
    enumServices.UNSPLASH,
    "Unsplash: delete collection",
    "Delete a photos collection on your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 1, collectionId: "Collection ID" }
  );
  insertReaction(
    enumReaction.UNSPLASH_LIKE_PHOTO,
    enumServices.UNSPLASH,
    "Unsplash: like photo",
    "Like a photo with your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 1, photoId: "Photo ID" }
  );
  insertReaction(
    enumReaction.UNSPLASH_UNLIKE_PHOTO,
    enumServices.UNSPLASH,
    "Unsplash: unlike photo",
    "Unlike a photo with your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 1, photoId: "Photo ID" }
  );
  insertReaction(
    enumReaction.UNSPLASH_ADD_PHOTO_TO_COLLECTION,
    enumServices.UNSPLASH,
    "Unsplash: add photo to collection",
    "Add a photo to one of your collection with your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 1, photoId: "Photo ID", collectionId: "Collection ID" }
  );
  insertReaction(
    enumReaction.UNSPLASH_REMOVE_PHOTO_FROM_COLLECTION,
    enumServices.UNSPLASH,
    "Unsplash: remove photo from collection",
    "Add a photo to one of your collection with your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 1, photoId: "Photo ID", collectionId: "Collection ID" }
  );
  insertReaction(
    enumReaction.UNSPLASH_UPDATE_PHOTO,
    enumServices.UNSPLASH,
    "Unsplash: update photo",
    "Update a photo description in your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 1, photoId: "Photo ID", description: "Description" }
  );
  insertReaction(
    enumReaction.UNSPLASH_UPDATE_PROFILE,
    enumServices.UNSPLASH,
    "Unsplash: update profile",
    "Update the profile (first name, lastname) of your Unsplash account",
    enumServicesAuth.UNSPLASH,
    { nbFields: 1, firstname: "First name", lastname: "Last name" }
  );
}
