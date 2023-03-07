import express, { Request, Response } from "express";
import { Youtube } from "../../../Services/Google/youtube";
import { getArea, getReactionServiceId } from "../../../Utils/researchDB";
import { callReaction } from "../../../Trigger/trigger";
import { allFunctionReaction } from "../../../Static/Callbacks/reactions";
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
  "http://localhost:8081/auth/google/redirect"
);

class YoutubeAController {
  public async subscriberCount(req: any, res: Response) {
    try {
      const token = req.headers.authorization;
      const areaId = req.headers.areaid;
      const area = await getArea(Number(areaId));
      const jsonAction = JSON.parse(JSON.stringify(area.action));
      const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
      const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));


      oAuth2Client.setCredentials({ access_token: token });

      const youtube = new Youtube(oAuth2Client);
      const response = await youtube.getChannelSubscriberCount(
        jsonAction.idAcount,
        Number(jsonAction.nbSubcriber)
      );
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

  public async viewerCount(req: any, res: Response) {
    try {
      const token = req.headers.authorization;
      const areaId = req.headers.areaid;
      const area = await getArea(Number(areaId));
      const jsonAction = JSON.parse(JSON.stringify(area.action));
      const jsonReaction = JSON.parse(JSON.stringify(area.reaction));

      oAuth2Client.setCredentials({ access_token: token });

      const youtube = new Youtube(oAuth2Client);
      const response = await youtube.getVideoViewCount(
        jsonAction.extraData.idVideo,
        Number(jsonAction.extraData.nbViewer)
      );
      if (response == true) {
        callReaction(
          allFunctionReaction.get(Number(jsonReaction.id)),
          token,
          areaId
        );
      }
      res.status(200);
    } catch (err) {
      res.status(401).send(err);
    }
  }
}

export default YoutubeAController;
