import React, { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const initialState = 0;
  const [count, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
    </div>
  );
};

export default Counter;
