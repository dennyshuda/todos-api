import { Router } from "express";
import todosController from "../controllers/Todos";
import verifyToken from "../middlewares/VerifyToken";

const TodosRouter = Router();

TodosRouter.get("/view", verifyToken, todosController.getTodos);
TodosRouter.post("/create", verifyToken, todosController.createTodos);
TodosRouter.get("/view/:todoId", verifyToken, todosController.getTodosById);
TodosRouter.delete("/delete/:todoId", verifyToken, todosController.deleteTodosById);
TodosRouter.put("/update/:todoId", verifyToken, todosController.updateTodos);

export default TodosRouter;
