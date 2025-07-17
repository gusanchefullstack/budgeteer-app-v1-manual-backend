import jwt from "jsonwebtoken"
import config from "../config/config"
import { Prisma } from "../generated/prisma";

export async function generateJWToken(payload:Pick<Prisma.UserCreateInput, "id" | "username">):Promise<string> {
    const privateKey = config.jwt;
    const token = await jwt.sign(payload, privateKey, { expiresIn: "24h", issuer:"budget-control-app", subject: payload.id})
    return token;
}

export async function validateJWToken(token:string) {
    try {
    const privateKey = config.jwt;
    const decoded = jwt.verify(token, privateKey);
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token expirado');
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Token inválido');
    } else {
      throw new Error('Error al validar token');
    }
  }
}