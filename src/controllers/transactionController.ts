import { Request, Response, NextFunction } from "express";
import transactionServices from "../services/transactionServices";

export const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const transactionData = req.body;
  try {
    const transaction =
      await transactionServices.createTransaction(transactionData);
    return res
      .status(200)
      .json({ message: "Transaction created sucessfully", data: transaction });
  } catch (error) {
    next(error);
  }
};
