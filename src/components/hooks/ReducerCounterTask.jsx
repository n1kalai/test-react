// useReducer counter  /  hw-1

import React from "react";
import { useReducer } from "react";
import "../../App.css";

const numberReducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case "decr.":
            return { count: state.count - 1 };
        case "incr.":
            return { count: state.count + 1 }
        default:
            return state;
    }
};

const initialState = { count : 0 };

export const ReducerCounter = () => {
    const [state, dispatch] = useReducer(numberReducer, initialState);

    const handleMinus = () => {
        dispatch({ type: "decr." })
    };

    const handlePlus = () => {
        dispatch({ type: "incr." })
    }

    return (
        <article>
            <h1>{state.count}</h1>
            <button id="minus-btn" onClick={handleMinus}>-1</button>
            <button id="plus-btn"onClick={handlePlus}>+1</button>
        </article>
    );
};
