import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const value = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
  ];
  const [todos, setTodos] = useState(value);

  const onAdd = (newTodoText) => {
    const newTodo = {
      id: Math.random(), // A unique identifier (you can use a library like uuid)
      text: newTodoText,
      completed: false, // By default, the new todo is incomplete
    };

    setTodos([...todos, newTodo]); // Add the new todo to the list
  };

  const onToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Your state management logic here

  return (
    <>
      <div className="main">
        <div className="inner_main">
          <h1>Todo List </h1>
          <div className="div_box">
            <div className="inputform">
              <TodoForm onAdd={onAdd} />
            </div>
            <div className="todoList">
              <TodoList
                todos={todos}
                onAdd={onAdd}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
