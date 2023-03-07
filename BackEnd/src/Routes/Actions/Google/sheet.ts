import express, { } from "express";
import { isConnectGoogle } from "../../../Middlewares/auth";
import SheetAController from "../../../Controllers/Actions/Google/sheetAController";

const app = express();
const sheetAController = new SheetAController();

app.get("/sheet-change", isConnectGoogle, sheetAController.SheetChange);

export default app;