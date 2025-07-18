import { Request, Response, NextFunction } from "express";

export const getAlllegalEntitys = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Getting all legalEntitys" });
  } catch (error) {
    next(error);
  }
};
export const getSinglelegalEntity = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Getting single legalEntity" });
  } catch (error) {
    next(error);
  }
};
export const createlegalEntity = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Creating legalEntity" });
  } catch (error) {
    next(error);
  }
};

export const updatelegalEntity = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Updating legalEntity" });
  } catch (error) {
    next(error);
  }
};

export const deletelegalEntity = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "Deleting legalEntity" });
  } catch (error) {
    next(error);
  }
};
