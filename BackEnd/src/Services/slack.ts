import { WebClient, LogLevel } from "@slack/web-api";
import axios from "axios";
import { getArea, getReactionByAreaId } from "../Utils/researchDB";

class Slack {
  private webhookUrlGeneralChannel: string;
  private client: WebClient;
  private token: string;

  constructor() {
    this.webhookUrlGeneralChannel =
      process.env.SLACK_WEBHOOK_URI_GENERAL_CHANNEL;
    this.token = process.env.SLACK_TOKEN;
    this.client = new WebClient(this.token);
  }

  public async publishMessage(areaId: number) {
    const area = await getArea(areaId);
    const reaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const res = await axios.post(
        this.webhookUrlGeneralChannel,
        { text: reaction.extraData.message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("SLACK PUBLISH MESSAGE : " + res.data);
    } catch (error) {
      console.log(error);
    }
  }

  public async createConversation(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelName = reaction.extraData.channelName.toLowerCase().replace(/ /g, "-");

    try {
      const result = await this.client.conversations.create({
        name: channelName
      });
      console.log("New Slack conversation '" + channelName + "' created successfully.");
    }
    catch (error) {
      console.error(error);
    }
  }

  public async renameConversation(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;
    const channelName = reaction.extraData.channelName.toLowerCase().replace(/ /g, "-");

    try {
      await this.client.conversations.rename({ channel: channelId, name: channelName });
      console.log(`Successfully renamed conversation with ID ${channelId} to ${channelName}`);
    } catch (error) {
      console.log(`Failed to rename conversation with ID ${channelId} to ${channelName}`);
      console.error(error);
    }
  }

  public async archiveConversation(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;

    try {
      await this.client.conversations.archive({ channel: channelId });
      console.log(`Successfully archived conversation with ID ${channelId}`);
    } catch (error) {
      console.log(`Failed to archive conversation with ID ${channelId}`);
      console.error(error);
    }
  }

  public async reactMessage(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;
    const messageId = reaction.extraData.messageId.slice(0, -6) + '.' + reaction.extraData.messageId.slice(-6);
    const emoji = reaction.extraData.emoji;

    try {
      await this.client.reactions.add({ channel: channelId, timestamp: messageId, name: emoji });
      console.log(`Successfully added ${emoji} reaction to message with ID ${messageId}`);
    } catch (error) {
      console.log(`Failed to add ${emoji} reaction to message with ID ${messageId}`);
      console.error(error);
    }
  }

  public async unarchiveConversation(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;

    try {
      await this.client.conversations.unarchive({ channel: channelId });
      console.log(`Successfully unarchived conversation with ID ${channelId}`);
    } catch (error) {
      console.log(`Failed to unarchive conversation with ID ${channelId}`);
      console.error(error);
    }
  }

  public async deleteMessage(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;
    const messageId = reaction.extraData.messageId.slice(0, -6) + '.' + reaction.extraData.messageId.slice(-6);

    try {
      await this.client.chat.delete({ channel: channelId, ts: messageId });
      console.log(`Message with ID ${messageId} deleted successfully`);
    } catch (error) {
      console.log(`Failed to delete message with ID ${messageId}`);
      console.error(error);
    }
  }

  public async updateMessage(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;
    const messageId = reaction.extraData.messageId.slice(0, -6) + '.' + reaction.extraData.messageId.slice(-6);

    try {
      await this.client.chat.update({ channel: channelId, ts: messageId, text: reaction.extraData.newMessage });
      console.log(`Message with ID ${messageId} updated successfully`);
    } catch (error) {
      console.log(`Failed to update message with ID ${messageId}`);
      console.error(error);
    }
  }

  public async markConversation(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;
    const messageId = reaction.extraData.messageId.slice(0, -6) + '.' + reaction.extraData.messageId.slice(-6);

    try {
      await this.client.conversations.mark({ channel: channelId, ts: messageId });
      console.log(`Conversation with ID ${messageId} marked successfully`);
    } catch (error) {
      console.log(`Failed to mark conversation with ID ${messageId}`);
      console.error(error);
    }
  }

  public async removeReaction(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;
    const messageId = reaction.extraData.messageId.slice(0, -6) + '.' + reaction.extraData.messageId.slice(-6);
    const emoji = reaction.extraData.emoji;

    try {
      await this.client.reactions.remove({ channel: channelId, timestamp: messageId, name: emoji });
      console.log(`Successfully removed ${emoji} reaction to message with ID ${messageId}`);
    } catch (error) {
      console.log(`Failed to remove ${emoji} reaction to message with ID ${messageId}`);
      console.error(error);
    }
  }

  public async setConversationTopic(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;
    const topic = reaction.extraData.topic;

    try {
      await this.client.conversations.setTopic({ channel: channelId, topic: topic });
      console.log(`Topic ${topic} set to channel with ID ${channelId}`);
    } catch (error) {
      console.log(`Failed to set topic ${topic} to channel with ID ${channelId}`);
      console.error(error);
    }
  }

  public async setConversationPurpose(areaId: number) {
    const reaction = await getReactionByAreaId(areaId);
    const channelId = reaction.extraData.channelId;
    const purpose = reaction.extraData.purpose;

    try {
      await this.client.conversations.setPurpose({ channel: channelId, purpose: purpose });
      console.log(`Purpose ${purpose} set to channel with ID ${channelId}`);
    } catch (error) {
      console.log(`Failed to set Purpose ${purpose} to channel with ID ${channelId}`);
      console.error(error);
    }
  }
}

export default Slack;
