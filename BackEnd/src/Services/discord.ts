import {
  EmbedBuilder,
  WebhookClient,
  Client,
  GatewayIntentBits,
  ActivityType,
} from "discord.js";
import { getArea, getReactionServiceId, getServiceToken } from "../Utils/researchDB";
import { PrismaClient } from "@prisma/client";
import { enumServices } from "../Static/Elements/services";
import axios from "axios";
import { allFunctionReaction } from "../Static/Callbacks/reactions";
import { callReaction } from "../Trigger/trigger";
import { ChannelType } from "discord.js";

const prisma = new PrismaClient();

type ChannelParentId = {
  text: string;
  voice: string;
};

class Discord {
  private webhookClient: WebhookClient;
  private webhookId: string;
  private webhookToken: string;
  private botToken: string;
  private embed: EmbedBuilder;
  private guildId: string;
  private channelParendId: ChannelParentId = { text: "", voice: "" };
  private client: Client;

  constructor() {
    this.webhookId = process.env.DISCORD_WEBHOOK_ID;
    this.webhookToken = process.env.DISCORD_WEBHOOK_TOKEN;
    this.botToken = process.env.DISCORD_BOT_TOKEN;
    this.guildId = process.env.DISCORD_GUILD_ID;
    this.channelParendId.voice = process.env.DISCORD_VOICE_CHANNEL_PARENT_ID;
    this.channelParendId.text = process.env.DISCORD_TEXT_CHANNEL_PARENT_ID;
    this.webhookClient = new WebhookClient({
      id: this.webhookId,
      token: this.webhookToken,
    });
    this.embed = new EmbedBuilder().setTitle("Reaction").setColor(0x00ffff);
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
  }

  async elementdb(areaId: number) {
    const area = await getArea(areaId);
    return JSON.parse(JSON.stringify(area.reaction));
  }

  private createChannel(
    name: string,
    guildId: string,
    parentId: string,
    type: number
  ) {
    this.client.login(this.botToken);

    this.client.once("ready", async () => {
      try {
        const server = this.client.guilds.cache.get(guildId);
        const newChannel: any = await server.channels.create({
          name: name,
          type: type,
          parent: parentId,
        });
        console.log(`Created new channel: ${newChannel.name}`);
      } catch (err) {
        console.error(err);
      }
    });
  }

  public async createTextChannel(areaId: number): Promise<void> {
    const jsonObject = await this.elementdb(areaId);

    this.createChannel(
      jsonObject.extraData.name,
      this.guildId,
      this.channelParendId.text,
      ChannelType.GuildText
    );
  }

  public async createVoiceChannel(areaId: number): Promise<void> {
    const jsonObject = await this.elementdb(areaId);

    this.createChannel(
      jsonObject.extraData.name,
      this.guildId,
      this.channelParendId.voice,
      ChannelType.GuildVoice
    );
  }

  public async sendMessage(areaId: number): Promise<void> {
    const jsonObject = await this.elementdb(areaId);
    this.webhookClient.send({
      content: jsonObject.extraData.content,
      username: jsonObject.extraData.username,
      avatarURL: "https://i.imgur.com/AfFp7pu.png",
      embeds: [this.embed],
    });
  }

  public async updateBotStatus(areaId: number): Promise<void> {
    const jsonObject = await this.elementdb(areaId);
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });

    client.on("ready", () => {
      client.user.setPresence({
        activities: [
          { name: jsonObject.extraData.activity, type: ActivityType.Playing },
        ],
        status: "online",
      });
    });

    client.login(this.botToken);
  }

  public async listenMessage(areaId: number, reactionToken: string) {
    const area = await getArea(areaId);
    const tokens = await getServiceToken(area.userId, enumServices.DISCORD);
    const userData = await this.getUserData(tokens.accessToken);
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });

    client.on("ready", () => {
      console.log(`${client.user.tag} has logged in.`);
    });

    client.on("messageCreate", (message) => {
      if (message.author.id === userData.id) {
        try {
          callReaction(
            allFunctionReaction.get(Number(jsonReaction.id)),
            serviceOauth,
            areaId.toString()
          );
        } catch (error) {
          console.log(error);
        }
      }
    });

    client.login(this.botToken);
  }

  private async getUserData(accessToken: string) {
    try {
      const response = await axios.get("https://discord.com/api/users/@me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          scope: "identify",
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default Discord;
