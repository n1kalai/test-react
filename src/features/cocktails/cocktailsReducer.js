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
		addCartItem(state, action) {
			const cocktailId = action.payload;
			const foundCocktail = state.cocktails.data.find(
				(cocktail) => cocktail.idDrink === cocktailId
			);

			state.cartItems.push(foundCocktail);
		},
		showCart(state) {
			state.showCartItems = !state.showCartItems;
		},
	},
});

export const { addItems, addCartItem, showCart } = cocktailsReducer.actions;
export default cocktailsReducer.reducer;
