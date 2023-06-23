import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../features/counter/counterReduser";
import userReducer from "../features/user/userReducer";
import todoReducer from "../features/todo/todoReducer";
import cocktailsReducer from "../features/cocktails/cocktailsReducer";

export const store = configureStore({
	reducer: {
		counter: counterReduser,
		user: userReducer,
		todo: todoReducer,
		cocktails: cocktailsReducer,
	},
});
