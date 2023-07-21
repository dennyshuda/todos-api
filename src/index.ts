import express, { Application } from "express";
import HealthRouter from "./api/routes/Health";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT;

app.use(HealthRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
