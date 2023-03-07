// import nodemailer from 'nodemailer';
import axios from "axios";
import { allFunctionReaction } from "../Static/Callbacks/reactions";

class Weather {
  private accuweatherApiKey: string;
  private emailAccount: string;
  private emailPassword: string;
  private locationKey: string;
  private transporter: any;

  constructor() {
    this.accuweatherApiKey = process.env.ACCUWEATHER_API_KEY;
    this.emailAccount = process.env.MAIL;
    this.emailPassword = process.env.MAIL_PASSWORD;
    this.locationKey = "623";
    // this.transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: this.emailAccount,
    //     pass: this.emailPassword,
    //   },
    // });
  }

  public async checkTemperature(): Promise<number> {
    try {
      const { data } = await axios.get(
        `http://dataservice.accuweather.com/currentconditions/v1/${this.locationKey}.json?apikey=${this.accuweatherApiKey}`
      );
      const temperature = data[0].Temperature.Metric.Value;
      return temperature;
    } catch (err) {
      console.error(err);
    }
  }

  // public sendEmail(temperature: number) {
  //   const mailOptions = {
  //     from: this.emailAccount,
  //     to: 'maildebrocoli@gmail.com',
  //     subject: 'Temperature Alert',
  //     text: `The temperature is currently below 0 degrees Celsius. Current temperature is ${temperature}`,
  //   };
  //   this.transporter.sendMail(mailOptions, (err, info) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log(`Email sent: ${info.response}`);
  //     }
  //   });
  // }

  async checkTemperatureInfZero(): Promise<boolean> {
    const temperature = await this.checkTemperature();
    if (temperature < 100) {
      return true;
    } else {
      return false;
    }
  }
}
export { Weather };
