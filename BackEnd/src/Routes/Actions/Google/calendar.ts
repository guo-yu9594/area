import express, { } from "express";
import { isConnectGoogle } from "../../../Middlewares/auth";
import CalendarAController from "../../../Controllers/Actions/Google/calendarAController";

const calendar = express();
const calendarAController = new CalendarAController();

// /calendar route (with middelware connect), checking element of google calendar
calendar.get("/calendar-event", isConnectGoogle, calendarAController.calendarEvent);

export { calendar };
