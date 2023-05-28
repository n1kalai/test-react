import react, { useState } from "react";
import "./index.scss";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input !== "") {
      const newTodo = {
        id: Date.now(),
        Text: input,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    const filteredArr = todos.filter((todo) => todo.id !== id);
    setTodos(filteredArr);
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="todo-list">
      <h1>Todo list</h1>
      <div className="todo-input">
        <input
          placeholder="Add item..."
          type="text"
          value={input}
          onChange={handleChangeInput}
          onKeyDown={handleEnter}
        />
        <button onClick={addTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
              {todo.Text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
