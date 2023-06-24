import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showNum: false,
    items: [],
    showCartItems: false,
}

const cartCountSlice = createSlice({
    name: "cartcount",
    initialState,
    reducers: {
        increment(state) {
            state.showNum = true;
        },
        addCartItem(state, action) {
            const cocktailId = action.payload.cocktailId;
            const data = action.payload.data
            const fountCocktail = data.find(cocktail => cocktail.idDrink === cocktailId);
            const existingCocktail = state.items.find(item => item.idDrink === cocktailId);
            if (!existingCocktail) {
                state.items.push(fountCocktail);
            }
        },
        showCart(state, _action) {
            state.showCartItems = !state.showCartItems;
        },
        deleteCartItem(state, action) {
            state.items = state.items.filter(item => item.idDrink !== action.payload);
        },
    }
})

export const { increment, addCartItem, showCart, deleteCartItem } = cartCountSlice.actions;
export default cartCountSlice.reducer;