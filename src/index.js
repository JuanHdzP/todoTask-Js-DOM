import "./styles.css";

import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/components";

export const todoList = new TodoList();

// const tarea = new Todo("Aprender JS");

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// todoList.todos.forEach((todo) => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

console.log("todos", todoList.todos);
