import axios from "axios";
import stringify from "fast-json-stable-stringify";
import {
  addElementPrevious,
  getElementPrevious,
} from "../Utils/previousElement";

export class Reddit {
  private accessToken: string;

  constructor(token: string) {
    this.accessToken = token;
  }

  public async checkChangeUpvote(areaId: number, user: string) {
    const response = await axios.get(
      `https://oauth.reddit.com/user/${user}/upvoted`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    console.log(response.data);
    const previousAction = await getElementPrevious(areaId);

    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data.data.children[0]);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.data)));
        return true;
      }
    }
    return false;
  }

  public async checkChangeDownvote(areaId: number, user: string) {
    const response = await axios.get(
      `https://oauth.reddit.com/user/${user}/downvoted`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data.data.children[0]);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.data)));
        return true;
      }
    }
    return false;
  }

  public async checkChangeSub(areaId: number, subreddit: string) {
    const response = await axios.get(
      `https://oauth.reddit.com/r/${subreddit}/new`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.data.children[0])));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data.data.children[0]);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.data.children[0])));
        return true;
      }
    }
    return false;
  }

  public async checkChangeComment(areaId: number, user: string) {
    const response = await axios.get(
      `https://oauth.reddit.com/user/${user}/comments`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.data.children[0])));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data.data.children[0]);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data.data.children[0])));
        return true;
      }
    }
    return false;
  }
}
