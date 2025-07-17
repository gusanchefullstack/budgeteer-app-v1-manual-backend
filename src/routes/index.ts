import Router from "express";
import { authenticationRouter } from "./authenticationRoutes";
import { administrationRouter } from "./administrationRoutes";

export const apiRouter = Router();

apiRouter.use("/auth", authenticationRouter);
apiRouter.use("/admin", administrationRouter);


