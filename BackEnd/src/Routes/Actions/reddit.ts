import express, { Response } from "express";
import RedditAController from "../../Controllers/Actions/redditAController";

const app = express();
const redditAController = new RedditAController();

app.get("/change-sub", redditAController.changeSub);
app.get("/change-comment", redditAController.changeComment);
app.get("/change-upvoted", redditAController.changeUpvoted);
app.get("/change-downvoted", redditAController.changeDownvoted);

export default app;
