import express from "express";
import SlackRController from "../../Controllers/Reactions/slackRController";

const slackReactions = express();
const slackRController = new SlackRController();

slackReactions.get("/slack-publish-message", slackRController.publishMessage);
slackReactions.get("/slack-create-conversation", slackRController.createConversation);
slackReactions.get("/slack-rename-conversation", slackRController.renameConversation);
slackReactions.get("/slack-archive-conversation", slackRController.archiveConversation);
slackReactions.get("/slack-react-message", slackRController.reactMessage);
slackReactions.get("/slack-unarchive-conversation", slackRController.unarchiveConversation);
slackReactions.get("/slack-delete-message", slackRController.deleteMessage);
slackReactions.get("/slack-update-message", slackRController.updateMessage);
slackReactions.get("/slack-mark-conversation", slackRController.markConversation);
slackReactions.get("/slack-remove-reaction", slackRController.removeReaction);
slackReactions.get("/slack-set-conversation-topic", slackRController.setConversationTopic);
slackReactions.get("/slack-set-conversation-purpose", slackRController.setConversationPurpose);

export default slackReactions;
