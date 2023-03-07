import express, { Request, Response } from "express";
import { Twitch } from "../../Services/twitch";
import { getArea, getReactionServiceId, getServiceId } from "../../Utils/researchDB";
import { callReaction } from "../../Trigger/trigger";
import { allFunctionReaction } from "../../Static/Callbacks/reactions";

class TwitchAController {
  public async CheckSubscription(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));

    const twitch = new Twitch(token);
    const response = await twitch.subscriptions(
      jsonAction.extraData.chanelName
    );
    // if (response == true) {
    //   callReaction(allFunctionReaction.get(Number(jsonReaction.id)), token, areaId);
    // }
    res.status(200).send("OK");
  }

  public async checkChangeGame(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getServiceId(Number(jsonReaction.id));


    const twitch = new Twitch(token);
    const response = await twitch.ChangeGame(
      areaId,
      jsonAction.extraData.chanelName
    );
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async CheckIsOnLive(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getServiceId(Number(jsonReaction.id));

    const twitch = new Twitch(token);
    const response = await twitch.IsLive(
      areaId,
      jsonAction.extraData.chanelName
    );
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
    res.status(200).send("OK");
  }

  public async CheckChangeTitle(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    const twitch = new Twitch(token);
    const response = await twitch.ChangeTitle(
      areaId,
      jsonAction.extraData.chanelName
    );
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

export default TwitchAController;
