import React from "react";
import { useState } from "react";

const AddTodo = ({ addition }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addition({
      id: Math.floor(Math.random() * 1000),
      title: inputValue,
    });

    setInputValue("");
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
