import { useDispatch, useSelector } from "react-redux";
import { setItem, addItem, deleteItem } from "./features/toDo/todoSlice";
import React from "react";


const ToDoList = () => {

    const toDoItem = useSelector((state) => state.todo.toDoItem);
    const item = useSelector((state) => state.todo.item);
    const dispatch = useDispatch();
  
  return (
    <div className="todo_cont">
      <h1>TODO LIST</h1>
      <input
        placeholder="search item..."
        name="todo-list"
        value={item}
        onChange={(e) => dispatch(setItem(e.target.value))}
      />

      <button className="add_button" onClick={() => dispatch(addItem())}>
        ADD
      </button>

      <ul>
        {toDoItem.map((needToDo, index) => (
          <li key={needToDo.id}>
            <button className="del_button" onClick={() => dispatch(deleteItem(needToDo.id))}>{index + 1} {needToDo.value}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;