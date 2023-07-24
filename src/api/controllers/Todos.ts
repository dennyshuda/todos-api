import { Request, Response } from "express";
import todosService from "../services/Todos";

const getTodos = async (req: Request, res: Response) => {
  const { id } = req.app.locals.user;
  try {
    const todos = await todosService.getTodosFromDatabase(id);
    return res.status(200).json({ status: "found", data: todos });
  } catch (error) {
    return res.status(400).json({ status: "fail", message: "something wrong to get ypur data" });
  }
};

const getTodosById = async (req: Request, res: Response) => {
  const todoId = req.params.todoId;
  const { id } = req.app.locals.user;

  try {
    const todos = await todosService.getTodosById({ todoId, id });

    if (!todos) {
      return res.status(200).json({ status: "fail", message: "Data is not exist" });
    }

    return res.status(200).json({ status: "found", message: todos });
  } catch (error) {
    return res.status(400).json({ status: "fail", message: "something wrong" });
  }
};

const createTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todosService.createTodosToDatabase(req.body);
    return res.status(201).json({ message: todos });
  } catch (error) {
    return res.status(400).json({ message: "please i dont know" });
  }
};

const deleteTodosById = async (req: Request, res: Response) => {
  const todoId = req.params.todoId;
  try {
    const todos = await todosService.deleteTodosById(todoId);
    return res.status(200).json({ message: "succes delete" });
  } catch (error) {
    return res.status(400).json({ message: "there is a mistake" });
  }
};

const todosController = {
  getTodos,
  createTodos,
  getTodosById,
  deleteTodosById,
};

export default todosController;
