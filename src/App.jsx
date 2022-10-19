import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";


const KEY = "todoApp.todos";
//funcion normal
export function App() {
  const todoTaskRef = useRef();
  //aca se cambia el state, si se cambia el state siempre se hace copia del anterior state
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea ", completed: false },
  ]);
  // funciones manejadoras de eventos con arrow function para
  // comprobamos si ya hay todos almacenados
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  // para tener persistencia que se mantengan las tareas al recargar salvamos el array de todos
  // localStaorage del navegador solo almacena string
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);
  // aca maneja el checkbox, hace copia del state anterior de todo, lo modifica y lo vuelve a enviar
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (task === "") return;
    // seteamos anterior state
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };
  // eliminar
  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    // componente padre
    //ref recat identifica que componente se esta usando
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button style = {{color:'green'}} onClick={handleTodoAdd}>+</button>
      <button style = {{color:'red'}} onClick={handleClearAll}>-</button>
      <div>
        <h5>
        Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
        terminar
        </h5>
      </div>
    </Fragment>
  );
}

// las props se pasan de raiz al mas pequeno
//los eventos de mas abajo a mas arriba