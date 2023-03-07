import express, { Request, Response } from "express";
import Slack from "../../Services/slack";

class SlackRController {
  public async publishMessage(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.publishMessage(areaId);
      res
        .status(200)
        .json({ message: "Slack message sent successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async createConversation(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.createConversation(areaId);
      res
        .status(200)
        .json({ message: "Slack conversation created successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async renameConversation(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.renameConversation(areaId);
      res
        .status(200)
        .json({ message: "Slack conversation renamed successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async archiveConversation(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.archiveConversation(areaId);
      res
        .status(200)
        .json({ message: "Slack conversation archived successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async reactMessage(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.reactMessage(areaId);
      res
        .status(200)
        .json({ message: "Slack conversation archived successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async unarchiveConversation(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.unarchiveConversation(areaId);
      res
        .status(200)
        .json({ message: "Slack conversation unarchived successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteMessage(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.deleteMessage(areaId);
      res
        .status(200)
        .json({ message: "Slack message deleted successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async updateMessage(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.updateMessage(areaId);
      res
        .status(200)
        .json({ message: "Slack message updated successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async markConversation(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.markConversation(areaId);
      res
        .status(200)
        .json({ message: "Slack conversation marked successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async removeReaction(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.removeReaction(areaId);
      res
        .status(200)
        .json({ message: "Reaction removed successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async setConversationTopic(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.setConversationTopic(areaId);
      res
        .status(200)
        .json({ message: "Conversation topic setted successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async setConversationPurpose(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const slack: Slack = new Slack();

    try {
      const info = await slack.setConversationPurpose(areaId);
      res
        .status(200)
        .json({ message: "Conversation purpose setted successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default SlackRController;
