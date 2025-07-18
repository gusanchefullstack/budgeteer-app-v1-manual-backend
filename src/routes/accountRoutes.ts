import { Router } from "express";
import {
  createAccount,
  getAllAccounts,
  getSingleAccount,
  updateAccount,
  deleteAccount,
} from "../controllers/accountController";

export const accountRouter = Router();

accountRouter.get("/", getAllAccounts);
accountRouter.get("/:id", getSingleAccount);
accountRouter.post("/", createAccount);
accountRouter.put("/:id", updateAccount);
accountRouter.delete("/:id", deleteAccount);
