import express, { Request } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

const generateJson = async () => {
  const actions = await prisma.action.findMany();
  const reactions = await prisma.reaction.findMany();
  const services = await prisma.service.findMany();

  const json = {
    client: {
      host: "localhost",
    },
    server: {
      current_time: Date.now(),
      services: services.map((service) => ({
        name: service.title,
        actions: actions.filter((action) => {
          if (action.serviceId == service.id) {
            return {
              name: action.title,
              description: action.description,
            };
          }
        }),
        reactions: reactions.filter((reaction) => {
          if (reaction.serviceId == service.id) {
            return {
              name: reaction.title,
              description: reaction.description,
            };
          }
        }),
      })),
    },
  };
  return json;
};

app.get("/about.json", async (_: Request, res: any) => {
  const myJson = await generateJson();
  res.status(200).json(myJson);
});

export default app;
