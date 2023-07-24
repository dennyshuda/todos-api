import { prisma } from "../db";

type NewTodoProps = {
  authorId: string;
  title: string;
  description: string;
};

const getTodosFromDatabase = async (id: string) => {
  const query = await prisma.user.findFirst({ where: { id: id } }).myTodos();

  return query;
};

const createTodosToDatabase = async (newTodo: NewTodoProps) => {
  const query = await prisma.todos.create({ data: newTodo });

  return query;
};

const getTodosById = async (props: { id: string; todoId: string }) => {
  const query = await prisma.todos.findUnique({ where: { id: props.todoId, authorId: props.id } });

  return query;
};

const deleteTodosById = async (todoId: string) => {
  const query = await prisma.todos.delete({
    where: {
      id: todoId,
    },
  });

  return query;
};

const todosService = {
  getTodosFromDatabase,
  createTodosToDatabase,
  getTodosById,
  deleteTodosById,
};

export default todosService;
