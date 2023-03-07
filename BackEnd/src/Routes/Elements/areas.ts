import express, { Request, Response } from "express";
import { isConnect } from "../../Middlewares/auth";
import AreasController from "../../Controllers/Elements/areasController";

const router = express();
const areasController = new AreasController();

router.post("/areas", isConnect, areasController.addArea);

router.delete("/areas", isConnect, areasController.deleteArea);

router.put("/areas", isConnect, areasController.updateArea);

router.put("/areas-active", isConnect, areasController.activateArea);


export default router;
