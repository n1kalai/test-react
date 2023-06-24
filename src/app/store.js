import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../features/counter/counterReduser";
import userReducer from "../features/user/userReducer";
import cartslice from "../store/Cart-Slice"
import todoreducer from "../features/todo/todoreducer";

export const store = configureStore({
	reducer: {
		counterReduser: counterReduser,
		user: userReducer,
		todo: todoreducer,	
	},
});
