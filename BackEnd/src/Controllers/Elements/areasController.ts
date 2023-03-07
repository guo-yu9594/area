import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

class AreasController {
  public async addArea(req: any, res: Response) {
    const { user } = req;
    try {
      const response = await prisma.area.create({
        data: {
          action: req.body.actionId,
          reaction: req.body.reactionId,
          userId: user.userId,
          active: true,
        },
      });
      return res.status(StatusCodes.OK).send(response);
    } catch (err) {
      console.error(err);
    }
  }

  public async deleteArea(req: any, res: Response) {
    try {
      const response = await prisma.area.delete({
        where: {
          id: req.body.areaId,
        },
      });
      return res.status(StatusCodes.OK).send(response);
    } catch (err) {
      console.error(err);
    }
  }

  public async updateArea(req: any, res: Response) {
    try {
      const response = await prisma.area.update({
        where: {
          id: req.body.areaId,
        },
        data: {
          action: req.body.actionId,
          reaction: req.body.reactionId,
        },
      });
      return res.status(StatusCodes.OK).send(response);
    } catch (err) {
      console.error(err);
    }
  }

  public async activateArea(req: any, res: Response) {
    try {
      const response = await prisma.area.update({
        where: {
          id: req.body.areaId,
        },
        data: {
          active: req.body.active,
        },
      });
      return res.status(StatusCodes.OK).send(response);
    } catch (err) {
      console.error(err);
    }
  }
}

export default AreasController;
