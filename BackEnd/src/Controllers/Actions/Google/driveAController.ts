import express, { Request, Response } from "express";
import { Drive } from "../../../Services/Google/drive";
import { getArea, getReactionServiceId } from "../../../Utils/researchDB";
import { callReaction } from "../../../Trigger/trigger";
import { allFunctionReaction } from "../../../Static/Callbacks/reactions";
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
  "http://localhost:8081/auth/google/redirect"
);

class DriveAController {
  public async driveChange(req: any, res: Response) {
    try {
      const token = req.headers.authorization;
      const areaId = req.headers.areaid;
      const area = await getArea(Number(areaId));
      const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
      const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));
      oAuth2Client.setCredentials({ access_token: token });

      const drive = new Drive(oAuth2Client);
      const response = await drive.checkDriveChange(area.id);
      if (response == true) {
        callReaction(
          allFunctionReaction.get(Number(jsonReaction.id)),
          serviceOauth,
          areaId
        );
      }
      res.status(200);
    } catch (err) {
      res.status(401).send(err);
    }
  }
}

export default DriveAController;
