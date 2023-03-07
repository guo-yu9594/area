import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { insertToken } from "../../Utils/tokens";

const prisma = new PrismaClient();

class AuthController {

  public async register(req: Request, res: Response) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const NewUser = await prisma.user.create({
        data: {
          email: req.body.email,
          password: hashedPassword,
        },
      });
      const token = jwt.sign({ userId: NewUser.id }, "my-secret-key");
      const refreshToken = jwt.sign({ userId: NewUser.id }, "my-secret-key", {
        expiresIn: "7d",
      });
      await insertToken(
        "",
        "",
        0,
        NewUser.id 
      );
      res.status(200).send({ token, refreshToken, userId: NewUser.id });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error registering new user");
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (!user) {
        return res.status(404).send("User not found");
      }
      const valid = await bcrypt.compare(req.body.password, user.password);

      if (!valid) {
        return res.status(400).send("Invalid password");
      }
      const token = jwt.sign({ userId: user.id }, "my-secret-key");
      const refreshToken = jwt.sign({ userId: user.id }, "my-secret-key", {
        expiresIn: "7d",
      });
      res.status(200).json({ token, refreshToken, userId: user.id });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error logging in");
    }
  }

  public async user(req: any, res: Response) {
    res.json(req.user);
  }

}

export default AuthController;