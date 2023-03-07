import axios from "axios";
import stringify from "fast-json-stable-stringify";
import {
  addElementPrevious,
  getElementPrevious,
} from "../Utils/previousElement";

export class Miro {
  private accessToken;

  constructor(token: string) {
    this.accessToken = token;
  }

  public async createBoard(name: string) {
    await axios.post(
      "https://api.miro.com/v2/boards",
      { name: name },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetBoard(areaId: number) {
    const response = await axios.get("https://api.miro.com/v2/boards", {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
        "Content-Type": "application/json",
      },
    });
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async checkGetItemsBoard(areaId: number, boardId: string) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/items`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async checkGetSpecificItemsBoard(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/items/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/items/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async createAppCardItem(boardId: string, title: string) {
    const response = await axios.post(
      `https://api.miro.com/v2/boards/${boardId}/app_cards`,
      { status: "connected", title: title },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetAppCardItem(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/app_cards/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteAppCardItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/app_cards/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async createCardItem(boardId: string, title: string) {
    const response = await axios.post(
      `https://api.miro.com/v2/boards/${boardId}/cards`,
      { title: title },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetCardItem(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/cards/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteCardItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/cards/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetConnectors(areaId: number, boardId: string) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/connectors`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async checkGetSpecificConnector(
    areaId: number,
    boardId: string,
    connectorId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/connectors/${connectorId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteConnector(boardId: string, connectorId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/cards/${connectorId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetDocumentItem(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/documents/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteDocumentItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/documents/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetEmbedItem(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/embeds/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteEmbedItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/embeds/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetImageItem(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/images/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteDeleteImageItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/images/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async createShapeItem(boardId: string) {
    await axios.post(
      `https://api.miro.com/v2/boards/${boardId}/shapes`,
      {data: {shape: 'rectangle'}, position: {origin: 'center', x: 0, y: 0}},
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetShapeItem(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/shapes/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteShapeItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/shapes/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async createStickyNoteItem(boardId: string) {
    const response = await axios.post(
      `https://api.miro.com/v2/boards/${boardId}/sticky_notes`,
      { shape: "square" },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetStickyNoteItem(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/sticky_notes/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteStickyNoteItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/sticky_notes/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async createTextItem(boardId: string, content: string) {
    const response = await axios.post(
      `https://api.miro.com/v2/boards/${boardId}/texts`,
      { content: content },
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  public async checkGetTextItem(
    areaId: number,
    boardId: string,
    itemId: string
  ) {
    const response = await axios.get(
      `https://api.miro.com/v2/boards/${boardId}/texts/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const previousAction = await getElementPrevious(areaId);

    console.log(response.data);
    if (previousAction == null) {
      addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(areaId, JSON.parse(JSON.stringify(response.data)));
        return true;
      }
    }
    return false;
  }

  public async deleteTextItem(boardId: string, itemId: string) {
    const response = await axios.delete(
      `https://api.miro.com/v2/boards/${boardId}/texts/${itemId}`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }
}
