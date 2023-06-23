import { configureStore } from "@reduxjs/toolkit";
import cartCountSlice from "../features/CartCountSlice";
import cocktailSlice from "../features/CocktailSlice";

export const store = configureStore({
    reducer: {
        cartcount: cartCountSlice,
        cocktails: cocktailSlice,
    }
});
