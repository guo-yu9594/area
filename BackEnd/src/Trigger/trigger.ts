import * as cron from "node-cron";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
import { allFunctionAction } from "../Static/Callbacks/actions";
import {
  getServiceId,
  getServiceToken,
  getToken,
  getUserToArea,
} from "../Utils/researchDB";
import { webHookTrigger } from "../Webhooks/trigger";
import { webHookId } from "../Static/Elements/webhooks";
import express, { Response } from "express";

const prisma = new PrismaClient();
const triggerRoute = express()

let timer = 20
let conExpression
// '*/20 * * * * *'
// '*/5 * * * *'

export const callSingleAction = async (area): Promise<void> => {
  const jsonAction = JSON.parse(JSON.stringify(area.action));

  try {
    const route = allFunctionAction.get(Number(jsonAction.id));
    const serviceOauth = await getServiceId(Number(jsonAction.id));
    const accessToken = (serviceOauth) ? await getServiceToken(area.userId, serviceOauth) : undefined;
    if (accessToken !== undefined) {
      await axios.get(`http://localhost:8080${route}`, {
        headers: {
          Authorization: accessToken.accessToken,
          Areaid: area.id,
        },
      });
    } else {
      await axios.get(`http://localhost:8080${route}`, {
        headers: {
          areaId: area.id,
        },
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const callAction = async () => {
  try {
    const allArea = await prisma.area.findMany();

    allArea.map(async (area) => {
      if (area.active === true) {
        const jsonAction = JSON.parse(JSON.stringify(area.action));

        if (!webHookId.includes(+jsonAction.id)) callSingleAction(area);
      }
    });
    webHookTrigger(allArea);
  } catch (error) {
    console.log("call Action error: " + error);
  }
};

export const callReaction = async (
  route: string,
  serviceAuth: number,
  areaId: string
) => {
  try {
    const userId = await getUserToArea(Number(areaId));
    const accessToken = serviceAuth
      ? await getServiceToken(userId, serviceAuth)
      : null;
    if (accessToken) {
      await axios.get(`http://localhost:8080${route}`, {
        headers: {
          Authorization: accessToken.accessToken,
          Areaid: areaId,
        },
      });
    } else {
      await axios.get(`http://localhost:8080${route}`, {
        headers: {
          Areaid: areaId,
        },
      });
    }
  } catch (error) {
    console.log("call Reaction error: " + error);
  }
};

triggerRoute.post("/tigger-timer", async (req: any, res: Response ) => {
  try {
    timer = Number(req.body.timer);
    conExpression.stop()
    conExpression = cron.schedule(`*/${timer} * * * * *`, () => {
      callAction();
    });
    res.status(200);
  } catch (err) {
    console.error(err)
  }
});

export function Trigger() {
  console.log(`*/${timer} * * * * *`)
  conExpression = cron.schedule(`*/${timer} * * * * *`, () => {
    callAction();
  });
}

export {triggerRoute};