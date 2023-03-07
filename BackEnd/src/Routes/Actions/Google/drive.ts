import express, { } from "express";
import { isConnectGoogle } from "../../../Middlewares/auth";
import DriveAController from "../../../Controllers/Actions/Google/driveAController";

const drive = express();
const driveAController = new DriveAController();

drive.get("/drive-change", isConnectGoogle, driveAController.driveChange);

export { drive };
