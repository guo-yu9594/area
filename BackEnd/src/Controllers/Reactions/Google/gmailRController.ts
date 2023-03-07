import express, { Request, Response } from "express";
import Gmail from "../../../Services/Google/gmail";

class GmailRController {
  public async sendMail(req: Request, res: Response) {
    const areaId = req.headers.areaid;
    const gmail = new Gmail();
    try {
      const info = await gmail.sendEmail(Number(areaId));
      res.status(200).json({ message: "Email sent successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default GmailRController;
