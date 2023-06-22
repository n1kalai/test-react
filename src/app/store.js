import { configureStore } from "@reduxjs/toolkit";
import cartCountSlice from "./../features/cartCounter/cartCountSlice";
import cocktailSlice from "./../features/cocktailsFetch/cocktailSlice";

export const store = configureStore({
    reducer: {
        cartcounter: cartCountSlice,
        cocktails: cocktailSlice,
    }
});

