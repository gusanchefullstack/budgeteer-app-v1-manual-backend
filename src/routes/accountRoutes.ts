import { Router } from "express";
import { param, body } from "express-validator";

import {
  createAccount,
  getAllAccounts,
  getSingleAccount,
  updateAccount,
  deleteAccount,
} from "../controllers/accountController";
import { inputValidatorHandler } from "../middlewares/inputValidatorHandler";

export const accountRouter = Router();

accountRouter.get("/", getAllAccounts);
accountRouter.get(
  "/:id",
  param("id").trim().isMongoId().withMessage("Invalid account id"),
  inputValidatorHandler,
  getSingleAccount
);
accountRouter.post(
  "/",
  body("name")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing account name")
    .isLength({ min: 3, max: 256 })
    .withMessage("Invalid name length: min:3 max:256"),
  body("description")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing account description")
    .isLength({ min: 3, max: 128 })
    .withMessage("Invalid name length: min:3 max:128"),
  body("institution")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing account intitution")
    .isLength({ min: 3, max: 128 })
    .withMessage("Invalid name length: min:3 max:128"),
  body("legalId")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing account legalId")
    .isLength({ min: 3, max: 32 })
    .withMessage("Invalid name length: min:3 max:32"),
  body("balance")
    .toFloat()
    .isFloat()
    .withMessage("Invalid balance format"),
  body("ownerId")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing account ownerId")
    .isMongoId()
    .withMessage("Invalid owner id"),
  inputValidatorHandler,
  createAccount
);
accountRouter.put(
  "/:id",
  param("id").trim().isMongoId().withMessage("Invalid account id"),
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 256 })
    .withMessage("Invalid account name length: min:3 max:256"),
  body("description")
    .optional()
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 128 })
    .withMessage("Invalid account description length: min:3 max:128"),
  body("institution")
    .optional()
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 128 })
    .withMessage("Invalid institution name length: min:3 max:128"),
  body("legalId")
    .optional()
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 32 })
    .withMessage("Invalid legalId length: min:3 max:32"),
  body("balance")
    .optional()
    .trim()
    .notEmpty()
    .isFloat()
    .withMessage("Invalid balance format"),
  body("ownerId")
    .trim()
    .notEmpty()
    .withMessage("Missing account ownerId")
    .isMongoId()
    .withMessage("Invalid owner id"),
  inputValidatorHandler,
  updateAccount
);
accountRouter.delete(
  "/:id",
  param("id").trim().isMongoId().withMessage("Invalid account id"),
  inputValidatorHandler,
  deleteAccount
);
