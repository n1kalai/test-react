import React, { useReducer } from 'react';

const initialState = 0;

const countReducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {

    case 'Plus':
      return state + 1;

    case 'Minus':
      return state - 1;

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => dispatch({ type: 'Plus' })}>Plus+</button>
      <button onClick={() => dispatch({ type: 'Minus' })}>Minus-</button>
    </div>
  );
};

export default Counter;
