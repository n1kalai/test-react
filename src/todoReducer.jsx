import { useReducer } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "changeText":
      return {
        ...state,
        value: action.payload,
      };
    case "addNew":
      if (state.value === "") {
        return state;
      }
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "delete":
      return {
        value: "",
        list: state.list.filter((item, index) => index !== action.payload),
      };
  }
};

const defaultState = {
  value: "",
  list: [],
};

const TodoListReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, defaultState);
  const handleNewText = () => {
    dispatch({ type: "addNew", payload: state.value });
  };

  const handleDeleteText = (index) => {
    dispatch({ type: "delete", payload: index });
  };
  return (
    <div className="reactdiv">
      <div className="main-div">
        <input
          className="input"
          value={state.value}
          onChange={(e) =>
            dispatch({ type: "changeText", payload: e.target.value })
          }
        />
        <button className="button" onClick={handleNewText}>
          add
        </button>
        {state.list.map((item, index) => (
          <div className="li" onClick={() => handleDeleteText(index)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoListReducer;
