import "./App.css";
import { useState } from "react";

const App = () => {
  const [toDo, setTodo] = useState({
    text: "",
  });
  const [todos, setTodos] = useState([]);

  const handleChangevalue = (val) => {
    setTodo((prev) => {
      return { ...prev, [val.name]: val.value };
    });
  };

  const handleAddToDo = () => {
    const newTodo = {
      ...toDo,
      id: Math.floor(Math.random() * 1000),
    };
    setTodos((prev) => [...prev, newTodo]);
    setTodo({ text: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDeleteTodo = (index) => {
    console.log(index);
    const upDatedToDos = [...todos];
    upDatedToDos.splice(index, 1);
    setTodos(upDatedToDos);
  };

  return (
    <div className="Main-Div">
      <h1 className="Headone">TODO LIST</h1>
      <hr className="hr"></hr>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={(event) => handleChangevalue(event.target)}
          value={toDo.text}
          name="text"
          className="input"
          placeholder="add item..."
        />
        <button onClick={handleAddToDo} className="button">
          ADD
        </button>
      </form>
      <ul className="return">
        {todos.map((todo, index) => (
          <li
            className="li"
            onClick={() => handleDeleteTodo(index)}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
