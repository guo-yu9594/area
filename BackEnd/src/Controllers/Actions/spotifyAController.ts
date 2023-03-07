import express, { Request, Response } from "express";
import { Spotify } from "../../Services/spotify";
import { getArea, getReactionServiceId } from "../../Utils/researchDB";
import { callReaction } from "../../Trigger/trigger";
import { allFunctionReaction } from "../../Static/Callbacks/reactions";

class SpotifyAController {
  public async changePlaylist(req: any, res: Response) {
    const token: string = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


    const spotify = new Spotify(token);
    const response = await spotify.checkChangePlaylist(Number(areaId));
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

export default SpotifyAController;
