import { Router } from "express";
import userController from "../controllers/User";

const UserRouter = Router();

UserRouter.post("/register", userController.register);

export default UserRouter;
