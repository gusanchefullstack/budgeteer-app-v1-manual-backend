import Router from "express";
import { authenticationRouter } from "./authenticationRoutes";
import { administrationRouter } from "./administrationRoutes";
import { accountRouter } from "./accountRoutes";
import { legalEntityRouter } from "./legalEntityRoutes";
import { transactionRouter } from "./transactionRoutes";

export const apiRouter = Router();

apiRouter.use("/auth", authenticationRouter);
apiRouter.use("/accounts", accountRouter);
apiRouter.use("/legal-entities", legalEntityRouter);
apiRouter.use("/transactions", transactionRouter);
apiRouter.use("/admin", administrationRouter);
