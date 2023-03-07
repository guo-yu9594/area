import axios from "axios";
import stringify from "fast-json-stable-stringify";
import {
  addElementPrevious,
  getElementPrevious,
} from "../Utils/previousElement";

export class Dropbox {
  private accessToken;

  constructor(token: string) {
    this.accessToken = token;
  }

  public async checkChangeFile(areaId: number) {
    const response = await axios.post(
      "https://api.dropboxapi.com/2/files/list_folder",
      {
        include_deleted: false,
        include_has_explicit_shared_members: false,
        include_media_info: false,
        include_mounted_folders: true,
        include_non_downloadable_files: true,
        path: "",
        recursive: false,
      },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    if (previousAction == null) {
      addElementPrevious(
        areaId,
        JSON.parse(JSON.stringify(response.data.entries))
      );
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data.entries);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(
          areaId,
          JSON.parse(JSON.stringify(response.data))
        );
        return true;
      }
    }
    return false;
  }
}
