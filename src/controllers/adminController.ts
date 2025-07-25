import { Request, Response, NextFunction } from "express";
import adminServices from "../services/adminServices";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await adminServices.getUsers();
    res.json({ status: "Ok", data: users });
  } catch (error) {
    next(error);
  }
};

const getTransactions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const transactions = await adminServices.listTransactions();
    res.json({ status: "Ok", data: transactions });
  } catch (error) {
    next(error);
  }
};

export default {
  getUsers,
  getTransactions,
};
