import { Prisma, PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const registerUser = async (userData: Prisma.UserCreateInput) => {
  try {
    const user = await prisma.user.create({
      data: {
        ...userData,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error creating new user in DB");
  }
};

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error("Error reading users from DB");
  }
};

export default {
  registerUser,
  getUsers,
};
