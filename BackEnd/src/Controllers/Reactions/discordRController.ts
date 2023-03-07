import express, { Request, Response } from "express";
import Discord from "../../Services/discord";

class DiscordRController {
  public async sendMessage(req: Request, res: Response) {
    const areaId = req.headers.areaid;
    const discord = new Discord();
    try {
      const info = await discord.sendMessage(+areaId);
      res
        .status(200)
        .json({ message: "Discord message sent successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async updateBotStatus(req: Request, res: Response) {
    const areaId = req.headers.areaid;
    const discord = new Discord();

    try {
      await discord.updateBotStatus(+areaId);
      res
        .status(200)
        .json({ message: "Discord bot status update successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async createTextChannel(req: Request, res: Response) {
    const areaId = req.headers.areaid;
    const discord = new Discord();

    try {
      await discord.createTextChannel(+areaId);
      res
        .status(200)
        .json({ message: "Discord text channel created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async createVoiceChannel(req: Request, res: Response) {
    const areaId = req.headers.areaid;
    const discord = new Discord();

    try {
      await discord.createVoiceChannel(+areaId);
      res
        .status(200)
        .json({ message: "Discord voice channel created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default DiscordRController;
