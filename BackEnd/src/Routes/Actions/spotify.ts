import express, { Response } from "express";
import SpotifyAController from "../../Controllers/Actions/spotifyAController";

const app = express();
const spotifyAController = new SpotifyAController();

app.get("/change-playlist", spotifyAController.changePlaylist);

export default app;
