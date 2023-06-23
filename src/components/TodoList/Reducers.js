import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  todoList: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state) => {
      state.todoList.push(state.value);
      state.value = "";
      
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((_todo, index) => index !== action.payload);
    },
    setInput: (state, action) => {
  
        state.value = action.payload;
        
      },
  },
});

export const { addTodo, deleteTodo, setInput } = todoSlice.actions;
export default todoSlice.reducer;
