import { Router } from "express";
import {
  getAllLegalEntitys,
  getSingleLegalEntity,
  createLegalEntity,
  updateLegalEntity,
  deleteLegalEntity,
} from "../controllers/legalEntityController";

export const legalEntityRouter = Router();

legalEntityRouter.get("/", getAllLegalEntitys);
legalEntityRouter.get("/:id", getSingleLegalEntity);
legalEntityRouter.post("/", createLegalEntity);
legalEntityRouter.put("/:id", updateLegalEntity);
legalEntityRouter.delete("/:id", deleteLegalEntity);
