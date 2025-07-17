import { Prisma, PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });
    return users;
  } catch (error) {
    throw new Error("Error reading users from DB");
  }
};

export default {
  getUsers,
};
