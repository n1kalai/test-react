import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";


const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, { id: uuidv4(), title: action.payload, completed: false }];
    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (input) => {
    dispatch({ type: "addTodo", payload: input });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "deleteTodo", payload: id });
  };

  return (
    <div>
       
      <Header />
      <Form addTodo={handleAddTodo} />
      <List todos={todos} deleteTodo={handleDeleteTodo} />
    </div>
 
  );
};

const Form = ({ addTodo }) => {
  const [input, setInput] = React.useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      return;
    }
    addTodo(input);
    setInput("");
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

const Header = () => {
  return (
    <div className="header">
      <h1>Todo List</h1>
    </div>
  );
};

const List = ({ todos, deleteTodo }) => {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    
    <ul>
      {todos.map((todo) => (
        <li
          onClick={() => handleDelete(todo.id)}
          className="list-item"
          key={todo.id}
        >
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;



