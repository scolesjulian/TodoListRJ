import React from "react";

export function TodoItem({ todo, toggleTodo }) {
  //destructuring
  const { id, task, completed } = todo;
  // handleTodoClick le pasamos el id como argumento
  const handleTodoClick = () => {
    toggleTodo(id);
  };
  // onchange escucha el cambio
  
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={handleTodoClick} />
      {task}
    </li>
  );
}