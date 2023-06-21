import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../features/counter/counterReduser";
import userReducer from "../features/user/userReducer";

export const store = configureStore({
	reducer: {
		counter: counterReduser,
		user: userReducer,
	},
});
