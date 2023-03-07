import express, { Request, Response } from "express";
import { Miro } from "../../Services/miro";
import { getArea } from "../../Utils/researchDB";


class MiroRController {
  public async createBoardControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = req.headers.authorization
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.createBoard(jsonReaction.extraData.name);
      res
        .status(200)
        .json({ message: "Miro: createBoard", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async createAppCardItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.createAppCardItem(jsonReaction.extraData.boardId, jsonReaction.extraData.title);
      res
        .status(200)
        .json({ message: "Miro: createAppCardItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteAppCardItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteAppCardItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteAppCardItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async createCardItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.createCardItem(jsonReaction.extraData.boardId, jsonReaction.extraData.title);
      res
        .status(200)
        .json({ message: "Miro: createCardItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteCardItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteCardItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteCardItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteConnectorControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteConnector(jsonReaction.extraData.boardId, jsonReaction.extraData.connectorId);
      res
        .status(200)
        .json({ message: "Miro: deleteConnector", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteDocumentItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteDocumentItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteDocumentItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteEmbedItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteEmbedItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteEmbedItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteDeleteImageItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteDeleteImageItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteDeleteImageItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async createShapeItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    try {
      const miro = new Miro(token);
      const info = await miro.createShapeItem(jsonReaction.extraData.boardId);
      res
        .status(200)
        .json({ message: "Miro: createShapeItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteShapeItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteShapeItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteShapeItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async createStickyNoteItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.createStickyNoteItem(jsonReaction.extraData.boardId);
      res
        .status(200)
        .json({ message: "Miro: createStickyNoteItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }


  public async deleteStickyNoteItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteStickyNoteItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteStickyNoteItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async createTextItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.createTextItem(jsonReaction.extraData.boardId, jsonReaction.extraData.content);
      res
        .status(200)
        .json({ message: "Miro: createTextItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteTextItemControl(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const token: string = String(req.headers.authorization)
    const miro = new Miro(token);
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    try {
      const info = await miro.deleteTextItem(jsonReaction.extraData.boardId, jsonReaction.extraData.itemId);
      res
        .status(200)
        .json({ message: "Miro: deleteTextItem", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default MiroRController;