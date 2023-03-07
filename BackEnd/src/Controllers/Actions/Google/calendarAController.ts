import express, { Request, Response } from "express";
import { Calendar } from "../../../Services/Google/calendar";
import { getArea, getReactionServiceId } from "../../../Utils/researchDB";
import { callReaction } from "../../../Trigger/trigger";
import { allFunctionReaction } from "../../../Static/Callbacks/reactions";
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
  "http://localhost:8081/auth/google/redirect"
);

class CalendarAController {
  public async calendarEvent(req: any, res: Response) {
    const token = req.headers.authorization;
    const areaId = req.headers.areaid;
    const area = await getArea(Number(areaId));
    const jsonAction = JSON.parse(JSON.stringify(area.action));
    const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
    const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

    oAuth2Client.setCredentials({ access_token: token });

    const calendar = new Calendar(oAuth2Client);
    const calendarId = "primary";
    const events = await calendar.calendar.events.list({ calendarId });

    if (events.data.items) {
      events.data.items.forEach(async (event) => {
        console.log(event.id);
      });
    }

    const response = await calendar.checkEvent(jsonAction.extraData.idEvent);
    if (response == true) {
      callReaction(
        allFunctionReaction.get(Number(jsonReaction.id)),
        serviceOauth,
        areaId
      );
    }
  }
}

export default CalendarAController;
