import { RequestHandler } from 'express';
import { Todo } from '../models';

let todos: Todo[] = [];

export const todosPost: RequestHandler = (req, res) => {
  const text = req.body.text as string;

  const newTodo: Todo = {
    id: String(new Date().getTime()),
    text,
  };

  todos = [...todos, newTodo];

  res
    .status(201)
    .json({ message: 'todo successfully created', payload: newTodo });
};

export const todosGet: RequestHandler = (_, res) => {
  res.json(todos);
};

export const todosPatch: RequestHandler<{ id: string }> = (req, res) => {
  const id = req.params.id;
  const text = req.body.text as string;

  const updatedTodo = { id, text };

  todos = [...todos.filter((todo) => todo.id !== id), updatedTodo];

  res.json({ message: 'todo successfully updated', payload: updatedTodo });
};

export const todosDelete: RequestHandler<{ id: string }> = (req, res) => {
  const id = req.params.id;

  const todoToDelete = todos.find((todo) => todo.id === id);

  todos = todos.filter((todo) => todo.id !== id);

  res.json({ message: 'todo successfully updated', payload: todoToDelete });
};
