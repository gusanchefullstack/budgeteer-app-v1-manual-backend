import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { apiRouter } from "./routes";
import { protect } from "./middlewares/jwtValidatorHandler";

const app = express();

app.use(express.json());

app.use("/api/v1", protect, apiRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to budget control Budgeteer app v1 (manual)" });
});

app.use(errorHandler);

export default app;
