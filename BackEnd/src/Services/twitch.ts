import axios from "axios";
import stringify from "fast-json-stable-stringify";
import {
  addElementPrevious,
  getElementPrevious,
} from "../Utils/previousElement";

const CLIENT_ID = process.env.TWITCH_ID;

export class Twitch {
  private accessToken;

  constructor(token: string) {
    this.accessToken = token;
  }
  public async getBroadcasterId(chanelName: string) {
    const userResponse = await axios.get(
      `https://api.twitch.tv/helix/search/channels?query=${chanelName}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Client-ID": CLIENT_ID,
        },
      }
    );
    const broadcasterId = userResponse.data.data[0].id;
    return broadcasterId;
  }

  public async getGameName(chanelName: string) {
    const userResponse = await axios.get(
      `https://api.twitch.tv/helix/search/channels?query=${chanelName}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Client-ID": CLIENT_ID,
        },
      }
    );
    const broadcasterGameName = userResponse.data.data[0].game_name;
    return broadcasterGameName;
  }

  public async getIsOnLive(chanelName: string) {
    const userResponse = await axios.get(
      `https://api.twitch.tv/helix/search/channels?query=${chanelName}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Client-ID": CLIENT_ID,
        },
      }
    );
    const broadcasterIsLive = userResponse.data.data[0].is_live;
    return broadcasterIsLive;
  }

  public async getTitle(chanelName: string) {
    const userResponse = await axios.get(
      `https://api.twitch.tv/helix/search/channels?query=${chanelName}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Client-ID": CLIENT_ID,
        },
      }
    );
    const broadcasterTitle = userResponse.data.data[0].title;
    return broadcasterTitle;
  }

  public async subscriptions(chanelName: string) {
    const broadcasterId = await this.getBroadcasterId(chanelName);
    try {
      const response = await axios.get(
        `https://api.twitch.tv/helix/subscriptions?broadcaster_id=${broadcasterId}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            "Client-ID": CLIENT_ID,
          },
        }
      );
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  public async ChangeGame(
    areaId: number,
    chanelName: string
  ): Promise<boolean> {
    const GameName = await this.getGameName(chanelName);

    const previousAction = await getElementPrevious(areaId);
    if (previousAction == null) {
      addElementPrevious(
        areaId,
        JSON.parse(JSON.stringify({ game_name: GameName }))
      );
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify({ game_name: GameName });
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(
          areaId,
          JSON.parse(JSON.stringify({ game_name: GameName }))
        );
        return true;
      }
    }
    return false;
  }

  public async IsLive(areaId: number, chanelName: string): Promise<boolean> {
    const isOnLive = await this.getIsOnLive(chanelName);

    if (isOnLive == true) return true;
    else return false;
  }

  public async ChangeTitle(
    areaId: number,
    chanelName: string
  ): Promise<boolean> {
    const title = await this.getTitle(chanelName);

    const previousAction = await getElementPrevious(areaId);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify({ title: title })));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify({ title: title });
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(
          areaId,
          JSON.parse(JSON.stringify({ title: title }))
        );
        return true;
      }
    }
    return false;
  }
}
