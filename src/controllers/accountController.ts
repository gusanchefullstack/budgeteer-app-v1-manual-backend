import { Request, Response, NextFunction } from "express";
import accountServices from "../services/accountServices";
import { Prisma } from "@prisma/client";
import prisma from "../services/prismaClient";

export const getAllAccounts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accounts = await accountServices.getAllAccounts();
    if (accounts.length === 0) {
      return res
        .status(404)
        .json({ message: "No accounts created", data: accounts });
    }
    return res.status(200).json({ message: "Ok", data: accounts });
  } catch (error) {
    next(error);
  }
};
export const getSingleAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const account = await accountServices.getSingleAccount(id);
    if (!account) {
      return res
        .status(404)
        .json({ message: "Account not found", data: account });
    }
    return res.status(200).json({ status: "Ok", data: account });
  } catch (error) {
    next(error);
  }
};
export const createAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accountData = req.body;
  try {
    const account = await accountServices.createAccount(accountData);
    return res
      .status(200)
      .json({ message: "Account created sucessfully", data: account });
  } catch (error) {
    next(error);
  }
};

export const updateAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accountData = req.body;
  const { id } = req.params;
  try {
    const account = await accountServices.updateAccount(id, accountData);
    return res
      .status(200)
      .json({ message: "Account updated sucessfully", data: account });
  } catch (error) {
    next(error);
  }
};

export const deleteAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const account = await prisma.account.delete({
      where: {
        id,
      },
    });
    return res
      .status(200)
      .json({ message: "Deleting account sucessfully", data: account });
  } catch (error) {
    next(error);
  }
};
