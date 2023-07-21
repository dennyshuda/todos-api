import express, { Application } from "express";
import HealthRouter from "./api/routes/Health";
import dotenv from "dotenv";
import cors from "cors";
import UserRouter from "./api/routes/User";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use(HealthRouter);
app.use(UserRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
