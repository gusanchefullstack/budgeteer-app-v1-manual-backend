import Router from "express";
import adminController from "../controllers/adminController";
import { protect } from "../middlewares/jwtValidatorHandler";

export const administrationRouter = Router();

administrationRouter.get("/users", protect, adminController.getUsers);


