import { prisma } from "../db";

type NewTodoProps = {
  authorId: string;
  title: string;
  description: string;
};

type UpdateTodosProps = {
  todoId: string;
  id: string;
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

const updateTodos = async (todos: UpdateTodosProps) => {
  const query = await prisma.todos.update({
    where: {
      id: todos.todoId,
      authorId: todos.id,
    },
    data: {
      title: todos.title,
      description: todos.description,
    },
  });
  return query;
};

const todosService = {
  getTodosFromDatabase,
  createTodosToDatabase,
  getTodosById,
  deleteTodosById,
  updateTodos,
};

export default todosService;
