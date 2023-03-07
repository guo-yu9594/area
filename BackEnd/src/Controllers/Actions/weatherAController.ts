import express, { Request, Response } from "express";
import { Weather } from "../../Services/weather";
import { getArea } from "../../Utils/researchDB";
import { callReaction } from "../../Trigger/trigger";
import { allFunctionReaction } from "../../Static/Callbacks/reactions";

class WeatherAController {

  public async belowZero(req: any, res: Response) {
    const areaId: string = req.headers.areaid;
    const token = req.headers.authorization;
    const area = await getArea(Number(areaId));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

    const weather = new Weather();
    const response = await weather.checkTemperatureInfZero();
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        token,
        areaId
      );
    }
    res.status(200).send("OK");
  }
}

export default WeatherAController;