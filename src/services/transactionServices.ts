import prisma from "./prismaClient";
import { ITransactionCreate } from "../models/transaction";
import { User } from "../models/user";

const createTransaction = async (transactionData: ITransactionCreate, transactionUser: User) => {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: transactionUser.id,
      },
      select: {
        username:true,
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
          ownerId:transactionUser.id
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
