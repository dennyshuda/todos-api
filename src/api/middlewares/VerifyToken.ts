import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (!token) return res.status(401).send("acces denied");

  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
    req.app.locals.user = verified;
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default verifyToken;
