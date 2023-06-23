import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../TodoList/Reducers";

const store = configureStore({
reducer: {
    todos: todoSlice,
},
});

export default store;
