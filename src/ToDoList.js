import { useReducer } from "react";

const initialState = {
  item: "",
  toDoItem: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setItem":
      return { ...state, item: action.payload };
    case "addItem":
      if (state.item.trim() === "") {
        return state;
      }
      const newItem = {
        id: Math.floor(Math.random() * 1000),
        value: state.item
      };
      return { ...state, toDoItem: [...state.toDoItem, newItem], item: "" };
    case "deleteItem":
      const deletedItems = state.toDoItem.filter(item => item.id !== action.payload);
      return { ...state, toDoItem: deletedItems };
    default:
      return state;
  }
};

const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = () => {
    dispatch({ type: "addItem" });
  };

  const deleteItem = (id) => {
    dispatch({ type: "deleteItem", payload: id });
  };

  return (
    <div className="todo_cont">
      <h1>TODO LIST</h1>
      <input
        placeholder="search item..."
        name="todo-list"
        value={state.item}
        onChange={(e) => dispatch({ type: "setItem", payload: e.target.value })}
      />

      <button className="add_button" onClick={addItem}>ADD</button>
      <ul>
        {state.toDoItem.map((needToDo, index) => (
          <li key={needToDo.id}>
            <button className="del_button" onClick={() => deleteItem(needToDo.id)}>{index + 1} {needToDo.value}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
