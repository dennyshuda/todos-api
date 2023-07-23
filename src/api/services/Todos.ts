import { prisma } from "../db";

type NewTodoProps = {
  authorId: string;
  title: string;
  description: string;
};

const getTodosFromDatabase = async (id: string) => {
  const query = await prisma.todos.findMany({
    where: {
      authorId: id,
    },
  });

  return query;
};

const createTodosToDatabase = async (newTodo: NewTodoProps) => {
  const query = await prisma.todos.create({ data: newTodo });

  return query;
};

const todosService = {
  getTodosFromDatabase,
  createTodosToDatabase,
};

export default todosService;
