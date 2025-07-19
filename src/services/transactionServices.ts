import prisma from "./prismaClient";
import { ITransactionCreate } from "../models/transaction";

const createTransaction = async (transactionData: ITransactionCreate) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: transactionData.ownerId,
      },
      select: {
        accounts: true,
        externals: true,
      },
    });
    if (!user) {
      throw new Error("User not valid for attach Transaction");
    }
    if (
      user.accounts.find(
        (account) => account.id === transactionData.accountId
      ) &&
      user.externals.find(
        (legalEntity) => legalEntity.id === transactionData.legalEntityId
      )
    ) {
      const transaction = await prisma.transaction.create({
        data: {
          ...transactionData,
        },
      });
    } else {
      throw new Error("Account or Legal Entity not valid for transaction");
    }
  } catch (error) {
    throw error;
  }
};

export default {
  createTransaction,
};
