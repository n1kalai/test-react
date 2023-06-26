import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cocktails: {
		isLoading: true,
		isError: false,
		data: [],
	},
	cartItems: [],
	showCartItems: false,
};

const cocktailsReducer = createSlice({
	name: "cocktails",
	initialState,
	reducers: {
		addItems(state, action) {
			state.cocktails.data = action.payload;
			state.cocktails.isLoading = false;
			state.cocktails.isError = false;
		},
	},
});

export const { addItems } = cocktailsReducer.actions;
export default cocktailsReducer.reducer;
