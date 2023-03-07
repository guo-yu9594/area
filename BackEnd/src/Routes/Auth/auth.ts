import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import { isConnect } from "../../Middlewares/auth";
import AuthController from "../../Controllers/Auth/authController";

const prisma = new PrismaClient();
const router: Router = Router();

const authController = new AuthController();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/user", isConnect, authController.user);

export default router;
