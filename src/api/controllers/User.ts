import { Request, Response } from "express";
import { hashing } from "../utils/hashing";
import { IUser } from "../types";
import userServices from "../services/User";

const register = async (req: Request, res: Response) => {
  const { name, email, password }: IUser = req.body;

  const newUser: IUser = {
    name,
    email,
    password: hashing(password),
  };

  try {
    const user = await userServices.getUserByEmail(email);

    if (user) {
      return res.status(409).json({ status: "found", message: `${user.email} is already exist` });
    }

    await userServices.register(newUser);
    return res.status(200).json({
      status: "succes",
      message: "Succes regist your account",
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const userController = { register };

export default userController;
