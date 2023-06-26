import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	showCartItems: false,
	cocktailsAmoun: 0,
};

const cartReducer = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCartItem(state, action) {
			const foundCocktail = state.cartItems.find(
				(item) => item.idDrink === action.payload.idDrink
			);

			if (!foundCocktail) {
				state.cocktailsAmoun += 1;
				state.cartItems.push({ ...action.payload, amount: 1 });
			} else {
				state.cartItems = state.cartItems.map((item) => {
					if (item.idDrink === foundCocktail.idDrink) {
						state.cocktailsAmoun += 1;
						return { ...item, amount: item.amount + 1 };
					}

					return item;
				});
			}
		},
		minusOneCocktail(state, action) {
			const foundCocktail = state.cartItems.find(
				(item) => item.idDrink === action.payload
			);

			if (foundCocktail.amount === 1) {
				state.cocktailsAmoun -= 1;
				state.cartItems = state.cartItems.filter(
					(element) => element.idDrink !== action.payload
				);
			}

			state.cartItems = state.cartItems.map((cocktail) => {
				if (cocktail.idDrink === action.payload) {
					state.cocktailsAmoun -= 1;
					return { ...cocktail, amount: cocktail.amount - 1 };
				}

				return cocktail;
			});
		},
		showCart(state) {
			state.showCartItems = !state.showCartItems;
		},
		deleteItem(state, action) {
			//
			state.cartItems = state.cartItems.filter((element) => {
				if (element.idDrink === action.payload) {
					state.cocktailsAmoun = state.cocktailsAmoun - element.amount;
				}
				return element.idDrink !== action.payload;
			});
		},
	},
});

export const { addCartItem, showCart, deleteItem, minusOneCocktail } =
	cartReducer.actions;
export default cartReducer.reducer;
