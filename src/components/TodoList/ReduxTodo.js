import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteTodo, addTodo } from "./Reducers";

const App = ( ) => {
//   const input = useSelector((state) => state.todos.todoList);
const [inputValue, setInputValue] = useState("");
const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    (setInputValue(event.target.value));
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    dispatch(addTodo());


  };
 

  return (
    <div className="container">
		<div className="app-wrapper">
         <div className="header">
      <h1>Todo List</h1>
    
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={inputValue}
        onChange={onInputChange}
      />
     <button className="button-add" type="submit">
        Add
      </button>
    </form>
      <ul>
      {todos.map((todo, index) => (
        <li
          onClick={() => handleDelete(index)}
          className="list-item"
          key={todo}
          
        >
          <input
            type="text"
            value={inputValue}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </ul>
    </div>
    </div>   </div>
  );
};

export default App;
