import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: "",
    toDoItem: []
}

const todoSlice  = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setItem(state, action){
            state.item = action.payload;
        },
        addItem(state){
            if (state.item.trim() === "") {
                return;
              }
              const newItem = {
                id: Math.floor(Math.random() * 1000),
                value: state.item
              };
              state.toDoItem.push(newItem);
              state.item = "";
        },
        deleteItem(state, action){
            state.toDoItem = state.toDoItem.filter(item => item.id !== action.payload);
        },
    }
})

export const { setItem, addItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;