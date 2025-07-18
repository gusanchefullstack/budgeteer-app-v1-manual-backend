import { Router } from "express";
import {
  getAlllegalEntitys,
  getSinglelegalEntity,
  createlegalEntity,
  updatelegalEntity,
  deletelegalEntity,
} from "../controllers/legalEntityController";

export const legalEntityRouter = Router();

legalEntityRouter.get("/", getAlllegalEntitys);
legalEntityRouter.get("/:id", getSinglelegalEntity);
legalEntityRouter.post("/", createlegalEntity);
legalEntityRouter.put("/:id", updatelegalEntity);
legalEntityRouter.delete("/:id", deletelegalEntity);
