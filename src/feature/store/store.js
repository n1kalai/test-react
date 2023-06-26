import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../slices/TodoSlice";



const Store = configureStore({
    reducer: {
        Todo:TodoSlice
    }
})
export default Store