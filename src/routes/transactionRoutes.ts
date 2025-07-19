import { Router } from "express";
import { createTransaction } from "../controllers/transactionController";

export const transactionRouter = Router();

transactionRouter.post("/", createTransaction)

