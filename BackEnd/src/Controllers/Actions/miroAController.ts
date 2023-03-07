import express, { Request, Response } from "express";
import { Miro } from "../../Services/miro";
import { getArea, getReactionServiceId } from "../../Utils/researchDB";
import { callReaction } from "../../Trigger/trigger";
import { allFunctionReaction } from "../../Static/Callbacks/reactions";

class MiroAController {
  public async getBoard(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    const miro = new Miro(token);
    const response = await miro.checkGetBoard(Number(areaId));
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getItemsBoard(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    const miro = new Miro(token);
    const response = await miro.checkGetItemsBoard(Number(areaId), jsonAction.extraData.boardId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getSpecificItemsBoard(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const miro = new Miro(token);
    const response = await miro.checkGetSpecificItemsBoard(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getAppCardItem(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const miro = new Miro(token);
    const response = await miro.checkGetAppCardItem(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getCardItem(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    const miro = new Miro(token);
    const response = await miro.checkGetCardItem(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getConnectors(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    const miro = new Miro(token);
    const response = await miro.checkGetConnectors(Number(areaId), jsonAction.extraData.boardId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getSpecificConnector(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const miro = new Miro(token);
    const response = await miro.checkGetSpecificConnector(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.connectorId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getDocumentItem(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    const miro = new Miro(token);
    const response = await miro.checkGetDocumentItem(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getEmbedItem(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const miro = new Miro(token);
    const response = await miro.checkGetEmbedItem(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getImageItem(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    const miro = new Miro(token);
    const response = await miro.checkGetImageItem(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getShapeItem(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const miro = new Miro(token);
    const response = await miro.checkGetShapeItem(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getStickyNoteItem(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const miro = new Miro(token);
    const response = await miro.checkGetStickyNoteItem(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async getTextItem(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const miro = new Miro(token);
    const response = await miro.checkGetTextItem(Number(areaId), jsonAction.extraData.boardId, jsonAction.extraData.itemId);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }
}

export default MiroAController;
