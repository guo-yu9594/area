import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { CallInsertService } from "./Static/Elements/services"

import router from "./Routes/routes";
import { CallInsertAction } from "./Static/Elements/actions";
import { CallInsertReaction } from "./Static/Elements/reactions";
import { Trigger } from "./Trigger/trigger";

dotenv.config();

const app: Express = express();
const port = process.env.API_PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

Trigger()

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("ok");
});

app.listen(port, () => {
  CallInsertService();
  CallInsertAction();
  CallInsertReaction();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
