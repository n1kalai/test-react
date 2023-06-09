// todo-list useReducer hw

import React, { useReducer } from "react";
import "../../App.css"

const initialState = {
    item: "",
    savedItems: []
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case "setItem":
            return { ...state, item: action.payload };
        case "addItem":
            if (!state.item) {
                alert("Enter an item...");
                return state;
            }
            const newItem = {
                id: Math.floor(Math.random() * 100),
                value: state.item
            };
            return {
                ...state,
                item: "",
                savedItems: [...state.savedItems, newItem]
            };
        case "deleteItem":
            const deletedItems = state.savedItems.filter(
                item => item.id !== action.payload
            );
            return { ...state, savedItems: deletedItems };
        default:
            return state;
    }
};

const TodoReducerApp = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addItem = () => {
        dispatch({ type: "addItem" });
    };

    const deleteItem = (id) => {
        dispatch({ type: "deleteItem", payload: id });
    };

    return (
        <div className="to-do-app">
            <h1>TODO LIST</h1>
            <input
                placeholder="add item..."
                value={state.item}
                onChange={(e) => dispatch({ type: "setItem", payload: e.target.value })}
            />

            <button id="add-button" onClick={addItem}>
                Add
            </button>
            <div className="list-box">
                <ul>
                    {state.savedItems.map((todoItem) => (
                        <li key={todoItem.id}>
                            <span>{todoItem.value}</span>
                            <button id="del-btn" onClick={() => deleteItem(todoItem.id)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoReducerApp;
