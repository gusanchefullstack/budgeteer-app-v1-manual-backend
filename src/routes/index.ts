import Router from "express";
import { authenticationRouter } from "./authenticationRoutes";
import { administrationRouter } from "./administrationRoutes";
import { accountRouter } from "./accountRoutes";
import { legalEntityRouter } from "./legalEntityRoutes";

export const apiRouter = Router();

apiRouter.use("/auth", authenticationRouter);
apiRouter.use("/accounts", accountRouter);
apiRouter.use("/legal-entities", legalEntityRouter);
apiRouter.use("/admin", administrationRouter);
