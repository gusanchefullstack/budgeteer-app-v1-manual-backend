import { Request, Response, NextFunction } from "express";
import budgetServices from "../services/budgetServices";

export const getAllBudgets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  try {
    const budgets = await budgetServices.getAllBudgets(user);
    if (budgets.length === 0) {
      return res
        .status(404)
        .json({ message: "No budgets created for this user", data: budgets });
    }
    return res.status(200).json({ message: "Ok", data: budgets });
  } catch (error) {
    next(error);
  }
};
export const getSingleBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = req.user;
  try {
    const budget = await budgetServices.getSingleBudget(id, user);
    if (!budget) {
      return res
        .status(404)
        .json({ message: "Budget not found", data: budget });
    }
    return res.status(200).json({ status: "Ok", data: budget });
  } catch (error) {
    next(error);
  }
};
export const createBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const budgetData = req.body;
  const user = req.user;
  try {
    const budget = await budgetServices.createBudget(budgetData, user);
    return res
      .status(200)
      .json({ message: "Budget created sucessfully", data: budget });
  } catch (error) {
    next(error);
  }
};

export const updateBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const budgetData = req.body;
  const user = req.user;
  const { id } = req.params;
  try {
    const budget = await budgetServices.updateBudget(id, budgetData, user);
    return res
      .status(200)
      .json({ message: "Budget updated sucessfully", data: budget });
  } catch (error) {
    next(error);
  }
};

export const deleteBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = req.user;
  try {
    const budget = await budgetServices.deleteBudget(id, user)
    return res
      .status(200)
      .json({ message: "Deleting budget sucessfully", data: budget });
  } catch (error) {
    next(error);
  }
};
