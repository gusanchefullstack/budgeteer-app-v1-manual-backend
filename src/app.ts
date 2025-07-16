import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to budget control Budgeteer app v1 (manual)"})
})

export default app;