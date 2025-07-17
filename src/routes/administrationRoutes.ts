import Router from "express";
import adminController from "../controllers/adminController";

export const administrationRouter = Router();

administrationRouter.get("/users", adminController.getUsers);


