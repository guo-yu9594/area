import express, { Response } from "express";
import GithubAController from "../../Controllers/Actions/githubAController";

const githubActions = express();
const githubAController = new GithubAController();

githubActions.post("/github-check-push", githubAController.checkPush);
githubActions.post("/github-new-branch", githubAController.newBranch);
githubActions.post("/github-delete-branch", githubAController.deleteBranch);
githubActions.post("/github-issues", githubAController.issues);
githubActions.post("/github-label", githubAController.label);
githubActions.post("/github-milestones", githubAController.milestones);
githubActions.post("/github-pull-request", githubAController.pullRequest);
githubActions.post("/github-pull-request-reviews", githubAController.pullRequestReviews);
githubActions.post("/github-pull-request-comments", githubAController.pullRequestComments);
githubActions.post("/github-release", githubAController.release);
githubActions.post("/github-visibility-changes", githubAController.visibilityChanges);
githubActions.post("/github-issues-comments", githubAController.issuesComments);

export default githubActions;
