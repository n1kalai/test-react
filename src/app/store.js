import { configureStore } from "@reduxjs/toolkit";
import cartCountSlice from "./../features/cartCounter/cartCountSlice";
import cocktailSlice from "./../features/cocktailsFetch/cocktailSlice";
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        cartcounter: cartCountSlice,
        cocktails: cocktailSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

