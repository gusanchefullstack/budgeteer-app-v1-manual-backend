import { Request, Response, NextFunction } from "express";
import legalEntityServices from "../services/legalEntityServices";
import prisma from "../services/prismaClient";

export const getAllLegalEntitys = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const legalEntitys = await legalEntityServices.getAllLegalEntitys();
    if (legalEntitys.length === 0) {
      return res
        .status(404)
        .json({ message: "No legalEntitys created", data: legalEntitys });
    }
    return res.status(200).json({ message: "Ok", data: legalEntitys });
  } catch (error) {
    next(error);
  }
};
export const getSingleLegalEntity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const legalEntity = await legalEntityServices.getSingleLegalEntity(id);
    if (!legalEntity) {
      return res
        .status(404)
        .json({ message: "LegalEntity not found", data: legalEntity });
    }
    return res.status(200).json({ status: "Ok", data: legalEntity });
  } catch (error) {
    next(error);
  }
};
export const createLegalEntity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const legalEntityData = req.body;
  try {
    const legalEntity = await legalEntityServices.createLegalEntity(legalEntityData);
    return res
      .status(200)
      .json({ message: "LegalEntity created sucessfully", data: legalEntity });
  } catch (error) {
    next(error);
  }
};

export const updateLegalEntity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const legalEntityData = req.body;
  const { id } = req.params;
  try {
    const legalEntity = await legalEntityServices.updateLegalEntity(id, legalEntityData);
    return res
      .status(200)
      .json({ message: "LegalEntity updated sucessfully", data: legalEntity });
  } catch (error) {
    next(error);
  }
};

export const deleteLegalEntity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const legalEntity = await prisma.legalEntity.delete({
      where: {
        id,
      },
    });
    return res
      .status(200)
      .json({ message: "Deleting legalEntity sucessfully", data: legalEntity });
  } catch (error) {
    next(error);
  }
};
