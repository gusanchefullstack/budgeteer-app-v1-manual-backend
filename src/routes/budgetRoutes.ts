import { Router } from "express";
import { body, query, param } from "express-validator";
import { inputValidatorHandler } from "../middlewares/inputValidatorHandler";
import {
  createBudget,
  getAllBudgets,
  getSingleBudget,
  updateBudget,
  deleteBudget,
} from "../controllers/budgetController";

export const budgetRouter = Router();

budgetRouter.get("/", getAllBudgets);
budgetRouter.get(
  "/:id",
  param("id").trim().isMongoId().withMessage("Invalid budget id"),
  inputValidatorHandler,
  getSingleBudget
);
budgetRouter.post(
  "/",
  body("name")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing budget name")
    .isLength({ min: 3, max: 256 })
    .withMessage("Invalid name length: min:3 max:256"),
  body("description")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing budget description")
    .isLength({ min: 3, max: 128 })
    .withMessage("Invalid name length: min:3 max:128"),
  body("startDate")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing budget start date.")
    .isISO8601()
    .withMessage(
      "Invalid start date format. Valid format: 2025-07-19T14:41:22.497Z"
    ),
  body("endDate")
    .exists()
    .trim()
    .notEmpty()
    .withMessage("Missing budget start date.")
    .isISO8601()
    .withMessage(
      "Invalid start date format. Valid format: 2025-07-19T14:41:22.497Z"
    ),
  inputValidatorHandler,
  createBudget
);
budgetRouter.put(
  "/:id",
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
  body("startDate")
    .optional()
    .trim()
    .notEmpty()
    .isISO8601()
    .withMessage(
      "Invalid start date format. Valid format: 2025-07-19T14:41:22.497Z"
    ),
  body("endDate")
    .optional()
    .trim()
    .notEmpty()
    .isISO8601()
    .withMessage(
      "Invalid start date format. Valid format: 2025-07-19T14:41:22.497Z"
    ),
  inputValidatorHandler,
  updateBudget
);
budgetRouter.delete(
  "/:id",
  param("id").trim().isMongoId().withMessage("Invalid budget id"),
  inputValidatorHandler,
  deleteBudget
);
