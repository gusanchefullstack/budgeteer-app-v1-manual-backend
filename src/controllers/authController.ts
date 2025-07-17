import { Request, Response, NextFunction } from "express";
import { Prisma } from "../generated/prisma";

import userServices from "../services/userServices";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userServices.getUsers();
    res.json({ status: "Ok", data: users });
  } catch (error) {
    next(error);
  }
};

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData: Prisma.UserCreateInput = req.body;
    const user = await userServices.registerUser(userData);
    res.json({ status: "User created", data: user});
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ message: "Logging user" });
  } catch (error) {
    next(error);
  }
};

export default {
  registerUser,
  loginUser,
  getUsers
};
