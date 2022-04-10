import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log("back", todo);

    if (!todo.text) {
      return;
    }

    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Whats your plan today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todo={todos} />
    </div>
  );
}

export default TodoList;
