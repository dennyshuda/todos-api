import { Router } from "express";
import todosController from "../controllers/Todos";
import verifyToken from "../middlewares/VerifyToken";

const TodosRouter = Router();

TodosRouter.get("/todos", verifyToken, todosController.getTodos);
TodosRouter.post("/todos", verifyToken, todosController.createTodos);
TodosRouter.get("/todos/:todoId", verifyToken, todosController.getTodosById);
TodosRouter.delete("/todos/:todoId", verifyToken, todosController.deleteTodosById);
TodosRouter.put("/todos/:todoId", verifyToken, todosController.updateTodos);

export default TodosRouter;
