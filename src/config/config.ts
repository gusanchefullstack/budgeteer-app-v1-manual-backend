import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  mongoDb: string;
  jwt: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongoDb: process.env.DATABASE_URL || "invalid-path-to-db",
  jwt: process.env.JSON_WEB_TOKEN || "invalid-token",
};

export default config;
