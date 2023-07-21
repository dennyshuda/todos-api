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

const userServices = {
  register,
  getUserByEmail,
};

export default userServices;
