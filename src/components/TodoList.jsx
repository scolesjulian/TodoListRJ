import React from "react";
import { TodoItem } from "./TodoItem";
//recibe props de array de todos que vienen de App 
export function TodoList({ todos, toggleTodo }) {
  return (
    //mapeamos el array
    //se imprime un componente por cada elemento del array
    //con la key identifica cada uno 
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

//togleTodo marca el checkbox completed