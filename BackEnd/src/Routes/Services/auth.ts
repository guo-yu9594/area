import express, { Request, Response } from "express";
import ServicesController from "../../Controllers/Services/servicesController";

const serviceAuth = express();
const servicesController = new ServicesController();

serviceAuth.get('/url/:id', servicesController.auth);
serviceAuth.get('/names/auth', servicesController.getAuthServicesNames);

export default serviceAuth;