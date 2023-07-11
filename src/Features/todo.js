import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value: '',
    todos: JSON.parse(localStorage.getItem('todos')) || []
  };
  
  const TodoReducer = createSlice({
    name: "todo",
    initialState,
    reducers: {
      inputValue(state, action) {
        state.value = action.payload;
      },
      add(state) {
        state.todos.push({
          text: state.value,
          checked: false
        });
        state.value = "";
        localStorage.setItem('todos', JSON.stringify(state.todos));
      },
      deleteItem(state, action) {
        state.todos = state.todos.filter(
          (_todo, todoIndex) => todoIndex !== action.payload
        );
        localStorage.setItem('todos', JSON.stringify(state.todos));
      },
      handleChecked(state, action) {
        const index = action.payload;
        state.todos[index].checked = !state.todos[index].checked;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      },
    },
  });

export const { inputValue, add, deleteItem, handleChecked } = TodoReducer.actions;
export default TodoReducer.reducer;