import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/config";
import { Prisma } from "../generated/prisma";

export async function generateJWToken(
  payload: Pick<Prisma.UserCreateInput, "id" | "username">
): Promise<string> {
  const privateKey = config.jwt;
  const token = await jwt.sign(payload, privateKey, {
    expiresIn: "24h",
    issuer: "budget-control-app",
    subject: payload.id,
  });
  return token;
}

export function validateJWToken(token: string): JwtPayload | string {
  try {
    const privateKey = config.jwt;
    const payload = jwt.verify(token, privateKey);
    return payload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error("Expired Token");
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new Error("Invalid Token");
    } else {
      throw new Error("Error while validating token");
    }
  }
}
