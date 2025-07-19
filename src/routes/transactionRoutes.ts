import { Router } from "express";
import { body } from "express-validator";
import { createTransaction } from "../controllers/transactionController";
import { inputValidatorHandler } from "../middlewares/inputValidatorHandler";

export const transactionRouter = Router();

transactionRouter.post(
  "/",
  body("description")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing transaction description")
    .isLength({ min: 3, max: 128 })
    .withMessage("Invalid description length: min:3 max:128"),
  body("transactionType").isIn(["INCOME", "EXPENSE"]),
  body("ownerId")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing transaction owner")
    .isMongoId()
    .withMessage("Invalid transaction owner id"),
  body("amount")
    .toFloat()
    .isFloat()
    .withMessage("Invalid balance format"),
  body("timestamp")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing transaction timestamp.")
    .isISO8601()
    .withMessage("Invalid timestamp format. Valid format: 2025-07-19T14:41:22.497Z"),
  body("legalEntityId")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing legalEntity id")
    .isMongoId()
    .withMessage("Invalid legal entity id"),
  body("accountId")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing account id")
    .isMongoId()
    .withMessage("Invalid account id"),
  inputValidatorHandler,
  createTransaction
);
