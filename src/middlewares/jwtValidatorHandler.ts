import { Request, Response, NextFunction } from "express";
import { validateJWToken } from "../utils/manageJsonWebToken";
import { User } from "../models/user";

export async function protect(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Not authorized" });
    }
    const token: string = authHeader.replace(/^Bearer\s+/, "");
    if (!token) {
      return res.status(401).json({ error: "Not valid token" });
    }
    const payload = validateJWToken(token);
    const { id, username } = payload;
    req.user = { id, username } as User
    next();
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
}
