import express, { Request, Response } from "express";
import { isConnect } from "../../Middlewares/auth";
import ElementsController from "../../Controllers/Elements/elementsController";

const elementsController = new ElementsController();
const router = express();

router.get("/services", isConnect, elementsController.getServices);

router.get("/actions", isConnect, elementsController.getActions);

router.get("/actions-connect", isConnect, elementsController.getActionsConnect);

router.get("/reactions", isConnect, elementsController.getReactions);

router.get("/reactions-connect", isConnect, elementsController.getReactionsConnect);

router.get("/emails", isConnect, elementsController.getEmail);

router.get("/areas", isConnect, elementsController.getAreas);

export default router;
