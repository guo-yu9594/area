import express, { Request, Response } from "express";
import Github from "../../Services/github";

class GithubAController {

  public async checkPush(req: any, res: Response) {
    const github = new Github();

    try {
      github.checkPush(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async newBranch(req: any, res: Response) {
    const github = new Github();

    try {
      github.newBranch(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async deleteBranch(req: any, res: Response) {
    const github = new Github();

    try {
      github.deleteBranch(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async issues(req: any, res: Response) {
    const github = new Github();

    try {
      github.issuesUpdated(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async label(req: any, res: Response) {
    const github = new Github();

    try {
      github.labelUpdated(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async milestones(req: any, res: Response) {
    const github = new Github();

    try {
      github.milestonesUpdated(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async pullRequest(req: any, res: Response) {
    const github = new Github();

    try {
      github.pullRequest(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async pullRequestReviews(req: any, res: Response) {
    const github = new Github();

    try {
      github.pullRequestReviews(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async pullRequestComments(req: any, res: Response) {
    const github = new Github();

    try {
      github.pullRequestComments(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async release(req: any, res: Response) {
    const github = new Github();

    try {
      github.releaseUpdated(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async visibilityChanges(req: any, res: Response) {
    const github = new Github();

    try {
      github.visibilityChanges(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };

  public async issuesComments(req: any, res: Response) {
    const github = new Github();

    try {
      github.issuesComments(req.body.repository.owner.id);
      res.status(200).send('success');
    } catch (error) {
      console.log(error)
      res.status(400);
    }
  };
};

export default GithubAController;