import Router from "express";
import authController from "../controllers/authController";

export const authenticationRouter = Router();

authenticationRouter.post("/register", authController.registerUser);
authenticationRouter.post("/login", authController.loginUser);
//Eliminar esta ruta de aqui y moverla a Admin luego
authenticationRouter.get("/users", authController.getUsers);

