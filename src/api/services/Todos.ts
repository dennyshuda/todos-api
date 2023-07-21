import { prisma } from "../db";

const getTodosFromDatabase = async (id: string) => {
  const query = await prisma.todos.findMany({
    where: {
      authorId: id,
    },
  });

  return query;
};

const todosService = {
  getTodosFromDatabase,
};

export default todosService;
