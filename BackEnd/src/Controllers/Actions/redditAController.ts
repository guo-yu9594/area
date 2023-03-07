import express, { Request, Response } from "express";
import { Reddit } from "../../Services/reddit";
import { getArea, getReactionServiceId } from "../../Utils/researchDB";
import { callReaction } from "../../Trigger/trigger";
import { allFunctionReaction } from "../../Static/Callbacks/reactions";

class RedditAController {
	public async changeSub(req: any, res: Response) {
		const token: string = req.headers.authorization;
		const areaId = req.headers.areaid;
		const area = await getArea(Number(areaId));
		const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
		const jsonAction = JSON.parse(JSON.stringify(area.action));
		const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

		const reddit = new Reddit(token);
		try {
			const response = await reddit.checkChangeSub(Number(areaId), jsonAction.extraData.subreddit);
			if (response == true) {
				callReaction(allFunctionReaction.get(Number(jsonReaction.id)), serviceOauth, areaId);
			}
			res.status(200).send("OK");
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	}

	public async changeComment(req: any, res: Response) {
		const token: string = req.headers.authorization;
		const areaId = req.headers.areaid;
		const area = await getArea(Number(areaId));
		const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
		const jsonAction = JSON.parse(JSON.stringify(area.action));
		const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

		const reddit = new Reddit(token);
		try {
			const response = await reddit.checkChangeComment(Number(areaId), jsonAction.extraData.user);
			if (response == true) {
				callReaction(allFunctionReaction.get(Number(jsonReaction.id)), serviceOauth, areaId);
			}
			res.status(200).send("OK");
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	}

	public async changeUpvoted(req: any, res: Response) {
		const token: string = req.headers.authorization;
		const areaId = req.headers.areaid;
		const area = await getArea(Number(areaId));
		const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
		const jsonAction = JSON.parse(JSON.stringify(area.action));
		const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

		const reddit = new Reddit(token);
		try {
			const response = await reddit.checkChangeUpvote(Number(areaId), jsonAction.extraData.user);
			if (response == true) {
				callReaction(allFunctionReaction.get(Number(jsonReaction.id)), serviceOauth, areaId);
			}
			res.status(200).send("OK");
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	}

	public async changeDownvoted(req: any, res: Response) {
		const token: string = req.headers.authorization;
		const areaId = req.headers.areaid;
		const area = await getArea(Number(areaId));
		const jsonReaction = JSON.parse(JSON.stringify(area.reaction));
		const jsonAction = JSON.parse(JSON.stringify(area.action));
		const serviceOauth = await getReactionServiceId(Number(jsonReaction.id));

		const reddit = new Reddit(token);
		try {
			const response = await reddit.checkChangeDownvote(Number(areaId), jsonAction.extraData.user);
			if (response == true) {
				callReaction(allFunctionReaction.get(Number(jsonReaction.id)), serviceOauth, areaId);
			}
			res.status(200).send("OK");
		} catch (error) {
			console.log(error);
			res.status(500).send(error);
		}
	}
}

export default RedditAController;
