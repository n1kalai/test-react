import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  todoItems: [],
};
const todoSliceReduser = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
    },
    changeTodo: (state, action) => {
      state.value = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (item) => item !== action.payload
      );
    },
  },
});
export const { addTodo, deleteTodo, changeTodo } = todoSliceReduser.actions;
export default todoSliceReduser.reducer;
