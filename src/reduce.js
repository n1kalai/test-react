import { useReducer } from "react";
const initialState = { number: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "plusNumber":
      return { number: state.number + 1 };

    case "minusNumber":
      return { number: state.number - 1 };

    default:
      return state;
  }
};
const CountReduse = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handlePlusNumber = () => {
    dispatch({ type: "plusNumber" });
  };

  const handleMinusNumber = () => {
    dispatch({ type: "minusNumber" });
  };

  return (
    <div>
      <h1>{state.number}</h1>
      <button onClick={handlePlusNumber}>plus</button>
      <button onClick={handleMinusNumber}>minus</button>
    </div>
  );
};

export default CountReduse;
