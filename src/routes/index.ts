import Router from "express";
import { authenticationRouter } from "./authenticationRoutes";
import { administrationRouter } from "./administrationRoutes";
import { accountRouter } from "./accountRoutes";
import { legalEntityRouter } from "./legalEntityRoutes";
import { transactionRouter } from "./transactionRoutes";
import { budgetRouter } from "./budgetRoutes";
import { protect } from "../middlewares/jwtValidatorHandler";

export const apiRouter = Router();

apiRouter.use("/auth", authenticationRouter);
apiRouter.use("/accounts", accountRouter);
apiRouter.use("/legal-entities", legalEntityRouter);
apiRouter.use("/budgets", budgetRouter);
apiRouter.use("/transactions", transactionRouter);
apiRouter.use("/admin", administrationRouter);
