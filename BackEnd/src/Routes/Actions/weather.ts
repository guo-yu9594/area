import express, { } from "express";
import dotenv from "dotenv";
import WeatherAController from "../../Controllers/Actions/weatherAController";

const app = express();
const weatherAController = new WeatherAController();

dotenv.config();

app.get("/weather-belowzero", weatherAController.belowZero);

export default app;
