import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

class ElementsController {
  public async getServices(_: Request, res: Response) {
    try {
      const services = await prisma.service.findMany();
      return res.status(StatusCodes.OK).send(services);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public async getActions(_: Request, res: Response) {
    try {
      const actions = await prisma.action.findMany();
      return res.status(StatusCodes.OK).send(actions);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public async getActionsConnect(req: any, res: Response) {
    const { user } = req;
    const tabAction = [];
    try {
      let tokens = await prisma.token.findMany({
        where: {
          userId: user.userId,
        },
      });
      const actions = await Promise.all(
        tokens.map(async (token) => {
          const action = await prisma.action.findMany({
            where: {
              authId: token.serviceId,
            },
          });
          const elem = tabAction.concat(action);
          return elem;
        })
      );
      return res.status(StatusCodes.OK).send(actions.flat());
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public async getReactions(_: Request, res: Response) {
    try {
      const reactions = await prisma.reaction.findMany();
      return res.status(StatusCodes.OK).send(reactions);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public async getReactionsConnect(req: any, res: Response) {
    const { user } = req;
    const tabAction = [];
    try {
      const tokens = await prisma.token.findMany({
        where: {
          userId: user.userId,
        },
      });
      const reactions = await Promise.all(
        tokens.map(async (token) => {
          const action = await prisma.reaction.findMany({
            where: {
              authId: token.serviceId,
            },
          });
          const elem = tabAction.concat(action);
          return elem;
        })
      );
      return res.status(StatusCodes.OK).send(reactions.flat());
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public async getEmail(req: any, res: any) {
    try {
      const userConnect = await req.user;
      const user = await prisma.user.findMany({
        where: { id: userConnect.userId },
      });
      return res.status(StatusCodes.OK).send(user[0].email);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  public async getAreas(req: any, res: any) {
    try {
      const userConnect = await req.user;
      const areaUser = await prisma.area.findMany({
        where: {
          userId: userConnect.userId,
        },
      });

      const data = await Promise.all(
        areaUser.map(async (area) => {
          const jsonAction = JSON.parse(JSON.stringify(area.action));
          const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
          const action = await prisma.action.findUnique({
            where: { id: jsonAction.id },
          });
          const reaction = await prisma.reaction.findUnique({
            where: { id: jsonReaction.id },
          });

          return {
            id: area.id,
            action: { title: action.title, description: action.description },
            reaction: {
              title: reaction.title,
              description: reaction.description,
            },
            active: area.active,
          };
        })
      );

      return res.status(StatusCodes.OK).send(data);
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  }
}

export default ElementsController;

