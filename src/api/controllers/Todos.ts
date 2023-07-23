import { Request, Response } from "express";
import todosService from "../services/Todos";

const getTodos = async (req: Request, res: Response) => {
  const { id } = req.app.locals.user;
  try {
    const todos = await todosService.getTodosFromDatabase(id);
    res.status(200).json({ status: "found", message: todos });
  } catch (error) {
    res.status(400).json({ status: "fail", message: "not u" });
  }
};

const createTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todosService.createTodosToDatabase(req.body);
    res.status(201).json({ message: todos });
  } catch (error) {
    res.status(400).json({ message: "not u" });
  }
};

const todosController = {
  getTodos,
  createTodos,
};

export default todosController;
