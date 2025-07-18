import { Request, Response, NextFunction } from "express";
import { Prisma } from "../generated/prisma";

import userServices from "../services/authServices";

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
    const credentials:Pick<Prisma.UserCreateInput, "username" | "password">  = req.body;
    const token = await userServices.loginUser(credentials);
    res.json({ status: "Successful login", token: token})
  } catch (error) {
    next(error);
  }
};

export default {
  registerUser,
  loginUser,
};
