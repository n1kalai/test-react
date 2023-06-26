import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  changeTodo,
  deleteTodo,
} from "../../feature/slices/TodoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Todo);
  console.log(todos);
  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        onChange={(e) => dispatch(changeTodo(e.target.value))}
      />
      <button onClick={() => dispatch(addTodo(todos.value))}>Add</button>
      {todos.todoItems.map((item) => (
        <div onClick={() => dispatch(deleteTodo(item))}>{item}</div>
      ))}
    </div>
  );
};

export default Todo;
