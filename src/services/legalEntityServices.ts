import prisma from "./prismaClient";
import { ILegalEntityCreate, ILegalEntityUpdate } from "../models/legalEntity";

const getAllLegalEntitys = async () => {
  try {
    const legalEntitys = await prisma.legalEntity.findMany();
    return legalEntitys;
  } catch (error) {
    throw error;
  }
};

const getSingleLegalEntity = async (id: string) => {
  try {
    const legalEntity = await prisma.legalEntity.findUnique({
      where: {
        id,
      },
    });
    return legalEntity;
  } catch (error) {
    throw error;
  }
};

const createLegalEntity = async (
  legalEntityData: ILegalEntityCreate
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: legalEntityData.ownerId,
      },
    });
    if (!user) {
      throw new Error("User not valid for attach LegalEntity");
    }
    const legalEntity = await prisma.legalEntity.create({
      data: {
        ...legalEntityData,
      },
    });
    return legalEntity;
  } catch (error) {
    throw error;
  }
};

const updateLegalEntity = async (id: string, legalEntityData: ILegalEntityUpdate) => {
  try {
    if (legalEntityData.ownerId) {
      const user = await prisma.user.findUnique({
        where: {
          id: legalEntityData.ownerId,
        },
      });
      if (!user) {
        throw new Error("User not valid for updating legalEntity");
      }
    }
    const legalEntity = await prisma.legalEntity.update({
      where: {
        id,
      },
      data: {
        ...legalEntityData,
      },
    });
    return legalEntity;
  } catch (error) {
    throw error;
  }
};

const deleteLegalEntity = async (id: string) => {
  try {
    const legalEntity = await prisma.legalEntity.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};

export default {
  getAllLegalEntitys,
  getSingleLegalEntity,
  createLegalEntity,
  updateLegalEntity,
  deleteLegalEntity,
};