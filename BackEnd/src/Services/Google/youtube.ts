import { google } from "googleapis";

export class Youtube {
  private youtube;

  constructor(oAuth2Client: any) {
    this.youtube = google.youtube({ version: "v3", auth: oAuth2Client });
  }

  async getChannelSubscriberCount(channelId: string, nbSubscriber: number) {
    const response: any = await this.youtube.channels.list({
      part: "statistics",
      id: channelId,
    });
    if (response.data.items[0].statistics.subscriberCount > nbSubscriber)
      return true;
    return false;
  }

  async getVideoViewCount(videoId: string, nbView: number) {
    const response = await this.youtube.videos.list({
      part: "statistics",
      id: videoId,
    });
    if (response.data.items[0].statistics.viewCount > nbView) return true;
    return false;
  }
}