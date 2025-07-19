import { Router } from "express";
import { param, body } from "express-validator";
import { inputValidatorHandler } from "../middlewares/inputValidatorHandler";

import {
  getAllLegalEntitys,
  getSingleLegalEntity,
  createLegalEntity,
  updateLegalEntity,
  deleteLegalEntity,
} from "../controllers/legalEntityController";

export const legalEntityRouter = Router();

legalEntityRouter.get("/", getAllLegalEntitys);
legalEntityRouter.get(
  "/:id",
  param("id").trim().isMongoId().withMessage("Invalid legal entity id"),
  inputValidatorHandler,
  getSingleLegalEntity
);
legalEntityRouter.post(
  "/",
  body("name")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing legal entity name")
    .isLength({ min: 3, max: 256 })
    .withMessage("Invalid name length: min:3 max:256"),
  body("description")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing legal entity description")
    .isLength({ min: 3, max: 128 })
    .withMessage("Invalid name length: min:3 max:128"),
  body("legalId")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing legal entity id")
    .isLength({ min: 3, max: 32 })
    .withMessage("Invalid name length: min:3 max:32"),
  body("ownerId")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing legal entity owner")
    .isMongoId()
    .withMessage("Invalid legal entity owner id"),
  inputValidatorHandler,
  createLegalEntity
);
legalEntityRouter.put(
  "/:id",
  param("id").trim().isMongoId().withMessage("Invalid legal entity id"),
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 256 })
    .withMessage("Invalid name length: min:3 max:256"),
  body("description")
    .optional()
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 128 })
    .withMessage("Invalid name length: min:3 max:128"),
  body("legalId")
    .optional()
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 32 })
    .withMessage("Invalid name length: min:3 max:32"),
  body("ownerId")
    .trim()
    .notEmpty()
    .withMessage("Missing legal entity owner id")
    .isMongoId()
    .withMessage("Invalid owner id"),
  inputValidatorHandler,
  updateLegalEntity
);
legalEntityRouter.delete(
  "/:id",
  param("id").trim().isMongoId().withMessage("Invalid legal entity id"),
  inputValidatorHandler,
  deleteLegalEntity
);
