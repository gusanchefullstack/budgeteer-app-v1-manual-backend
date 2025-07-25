import prisma from "./prismaClient";

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      omit: {
        password: true,
      },
      include: {
        budgets: true,
        accounts: true,
        externals: true,
      },
    });
    return users;
  } catch (error) {
    throw new Error("Error reading users from DB");
  }
};

const listTransactions = async () => {
  try {
    const transactions = await prisma.transaction.findMany();
    return transactions;
  } catch (error) {
    throw new Error("Error reading transactions from DB");
  }
};
export default {
  getUsers,
  listTransactions,
};
