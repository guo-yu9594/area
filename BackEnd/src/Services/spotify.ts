import axios from "axios";
import stringify from "fast-json-stable-stringify";
import {
  addElementPrevious,
  getElementPrevious,
} from "../Utils/previousElement";

export class Spotify {
  private accessToken;

  constructor(token: string) {
    this.accessToken = token;
  }

  public async checkChangePlaylist(areaId: number) {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data.items)
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.items)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data.items);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.items)));
        return true;
      }
    }
    return false;
  }
}
