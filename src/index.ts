import express, { Application } from "express";
import HealthRouter from "./api/routes/Health";

const app: Application = express();

const PORT: number = 5000;

app.use(HealthRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
