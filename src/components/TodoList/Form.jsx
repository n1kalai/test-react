import React, { useState } from "react";

const Form = ({ input, setInput, todo, setTodo }) => {
  const [idCounter, setIdCounter] = useState(1); 

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      return;
    }
    const newTodo = {
      id: idCounter,
      title: input,
      completed: false,
    };
    setTodo([...todo, newTodo]);
    setInput("");
    setIdCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
