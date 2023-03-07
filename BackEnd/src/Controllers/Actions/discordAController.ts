import express, { Request, Response } from "express";
import Discord from "../../Services/discord";

class DiscordAController {
  public async caughtMessage(req: Request, res: Response) {
    const token = req.headers.authorization;
    const areaId = req.headers.areaid as string;
    const discord = new Discord();
    try {
      const info = await discord.listenMessage(+areaId, token);
      res
        .status(200)
        .json({
          message: "Discord message sent action caught successfully",
          info,
        });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default DiscordAController;
