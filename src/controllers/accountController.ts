import { Request, Response, NextFunction } from "express";

export const getAllAccounts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Getting all accounts" });
  } catch (error) {
    next(error);
  }
};
export const getSingleAccount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Getting single account" });
  } catch (error) {
    next(error);
  }
};
export const createAccount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Creating account" });
  } catch (error) {
    next(error);
  }
};

export const updateAccount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Updating account" });
  } catch (error) {
    next(error);
  }
};

export const deleteAccount = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Deleting account" });
  } catch (error) {
    next(error);
  }
};
