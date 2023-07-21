import { Request, Response } from "express";
import { hashing } from "../utils/hashing";
import { IUser } from "../types";
import userServices from "../services/User";
import jwt from "jsonwebtoken";

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

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await userServices.login(email, password);
    const getUser = await userServices.getUserByEmail(email);

    if (user) {
      const accessToken = jwt.sign(
        { id: getUser?.id, name: getUser?.name, email: getUser?.email },
        process.env.ACCESS_TOKEN_SECRET!
      );
      return res.status(200).json({
        status: "succes",
        message: "password is match",
        token: accessToken,
      });
    } else {
      return res.status(400).json({
        status: "wrong password",
        message: "password is NOT match",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "something wrong",
    });
  }
};

const userController = { register, login };

export default userController;
