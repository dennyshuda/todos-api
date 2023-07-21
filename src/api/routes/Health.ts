import { Router, Request, Response } from "express";

const Health = Router();

Health.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ status: 200, message: "Hello this is TODOS API root" });
});

export default Health;
