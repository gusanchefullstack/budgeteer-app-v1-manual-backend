import prisma from "./prismaClient";
import { IAccountCreate, IAccountUpdate } from "../models/account";

const getAllAccounts = async () => {
  try {
    const accounts = await prisma.account.findMany();
    return accounts;
  } catch (error) {
    throw error;
  }
};

const getSingleAccount = async (id: string) => {
  try {
    const account = await prisma.account.findUnique({
      where: {
        id,
      },
    });
    return account;
  } catch (error) {
    throw error;
  }
};

const createAccount = async (
  accountData: IAccountCreate
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: accountData.ownerId,
      },
    });
    if (!user) {
      throw new Error("User not valid for attach Account");
    }
    const account = await prisma.account.create({
      data: {
        ...accountData,
      },
    });
    return account;
  } catch (error) {
    throw error;
  }
};

const updateAccount = async (id: string, accountData: IAccountUpdate) => {
  try {
    if (accountData.ownerId) {
      const user = await prisma.user.findUnique({
        where: {
          id: accountData.ownerId,
        },
      });
      if (!user) {
        throw new Error("User not valid for updating account");
      }
    }
    const account = await prisma.account.update({
      where: {
        id,
      },
      data: {
        ...accountData,
      },
    });
    return account;
  } catch (error) {
    throw error;
  }
};

const deleteAccount = async (id: string) => {
  try {
    const account = await prisma.account.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};

export default {
  getAllAccounts,
  getSingleAccount,
  createAccount,
  updateAccount,
  deleteAccount,
};
