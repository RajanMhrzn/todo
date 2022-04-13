import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Main = () => {
  const [todos, setTodos] = useState([]);

  const onAddition = (todo) => {
    setTodos([...todos, todo]);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo, idx) => todo.id !== id);
    setTodos(newTodos);
  };

  const onEdit = (editedValues) => {
    const newTodos = todos.map((todo, idx) => {
      if (todo.id === editedValues.id) {
        return {
          id: editedValues.id,
          title: editedValues.title,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onClickFunction = () => {
    console.log("clikcked back");
  };
  return (
    <div>
      <h2>Todo List </h2>
      <AddTodo addition={onAddition} />
      <TodoList
        todos={todos}
        deletion={onDelete}
        editFunction={onEdit}
        clickFunction={onClickFunction}
      />
    </div>
  );
};

export default Main;
