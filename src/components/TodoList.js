import React from "react";
import { useState } from "react";

const TodoList = ({ todos, deletion, editFunction, clickFunction }) => {
  const [edit, setEdit] = useState(false);

  const [editedId, setEditedId] = useState();
  const [editedTitle, setEditedTitle] = useState("");

  const handleChange = (e) => {
    const editedTitle = e.target.value;
    setEditedTitle(editedTitle);
  };

  const handleEdit = (id) => {
    setEdit(true);
    setEditedId(id);
    const editableTodo = todos.filter((todo, idx) => todo.id === id);
    setEditedTitle(editableTodo[0].title);
  };

  const submitEdit = () => {
    editFunction({
      id: editedId,
      title: editedTitle,
    });
    setEdit(false);
  };
  const clickFunction1 = (id) => {
    console.log("clicked here");
  };

  return (
    <div>
      {edit && (
        <div>
          <input type="text" value={editedTitle} onChange={handleChange} />
          <button onClick={submitEdit}>Change</button>
        </div>
      )}
      {todos.map((todo, idx) => {
        return (
          <div key={todo.id}>
            <div>
              <span>{todo.id} </span>, {todo.title}
              <button onClick={() => deletion(todo.id)}>X</button>
              <button onClick={() => handleEdit(todo.id)}>edit</button>
              <button onClick={clickFunction1(2)}>click</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
