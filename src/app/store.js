import { configureStore } from "@reduxjs/toolkit";
import  coctailsReducer from "../Features/coctailsReducer";

export const store = configureStore({
	reducer: {
        cocktails: coctailsReducer
	},
});