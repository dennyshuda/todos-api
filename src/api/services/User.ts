import { compareSync } from "bcrypt";
import { prisma } from "../db";
import { IUser } from "../types";

const register = async (payload: IUser) => {
  const query = await prisma.user.create({
    data: { name: payload.name, email: payload.email, password: payload.password },
  });

  return query;
};

const getUserByEmail = async (email: string) => {
  const query = await prisma.user.findUnique({ where: { email: email } });

  return query;
};

const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    const isValid = compareSync(password, user.password);
    return isValid;
  }
};

const userServices = {
  register,
  login,
  getUserByEmail,
};

export default userServices;
