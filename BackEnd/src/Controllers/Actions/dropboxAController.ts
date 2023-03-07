import express, { Request, Response } from "express";
import { Dropbox } from "../../Services/dropbox";
import { getArea, getReactionServiceId } from "../../Utils/researchDB";
import { callReaction } from "../../Trigger/trigger";
import { allFunctionReaction } from "../../Static/Callbacks/reactions";

class DropboxAController {
  public async ChangeFile(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    const dropbox = new Dropbox(token);
    const response = await dropbox.checkChangeFile(Number(areaId));
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

export default DropboxAController;
