import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: "",
    savedItems: []
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

        addItem(state, action) {
            if (!action.payload) {
                alert("Enter an item...");
                return;
            }
            const newItem = {
                id: Math.floor(Math.random() * 100),
                value: action.payload
            };
            state.savedItems.push(newItem);
            state.item = "";
        },
        deleteItem(state, action) {
            state.savedItems = state.savedItems.filter(
                (item) => item.id !== action.payload
            );
        }
    }
});

export const { addItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
