import Router from "express";
import authController from "../controllers/authController"
import { authenticationRouter } from "./authenticationRoutes";
export const apiRouter = Router();

apiRouter.use("/auth", authenticationRouter);


