import * as nodemailer from "nodemailer";
import { getArea } from "../../Utils/researchDB";

export class Gmail {

  async elementdb(areaId: number) {
    const area = await getArea(areaId)
    return JSON.parse(JSON.stringify(area.reaction))
  }

  async sendEmail(areaId: number) {
    const jsonObject = await this.elementdb(areaId)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL,        
      },
      port: 465,
      host: "smtp.gmail.com",
    });
    const mailOptions = {
      from: process.env.PASSWORD_EMAIL,
      to: jsonObject.extraData.to,
      subject: jsonObject.extraData.subject,
      text: jsonObject.extraData.text,
    };
    return transporter.sendMail(mailOptions);
  }
}

export default Gmail;