import { Prisma, PrismaClient } from "../generated/prisma";
import { hashPassword, verifyPassword } from "../utils/encryptPassword";
import { generateJWToken } from "../utils/manageJsonWebToken";

const prisma = new PrismaClient();

const registerUser = async (userData: Prisma.UserCreateInput) => {
  try {
    const { password } = userData;
    const user = await prisma.user.create({
      data: {
        ...userData,
        password: await hashPassword(password),
      },
      omit: {
        password: true,
      },
    });
    const { id, username } = user;
    const token = await generateJWToken({ id, username });
    return { user, token };
  } catch (error) {
    throw new Error("Error creating new user in DB");
  }
};

const loginUser = async (
  credentials: Pick<Prisma.UserCreateInput, "username" | "password">
) => {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        username: credentials.username,
      },
    });

    const isPasswordValid = await verifyPassword(
      credentials.password,
      user.password
    );
    if (!isPasswordValid) {
      throw new Error("Credentials invalid");
    }
    const { id, username } = user;
    const token = await generateJWToken({ id, username });
    return token ;
  } catch (error) {
    throw new Error("Credentials invalid");
  }
};

export default {
  registerUser,
  loginUser,
};
