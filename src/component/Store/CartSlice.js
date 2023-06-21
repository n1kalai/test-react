import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{show:false,cart:[]},

    reducers:{
        addToCart(state,action){
            state.cart=[...state.cart,action.payload]
        },
        toggleShowWindow(state,action){
            state.show=!state.show
        }
    }

})
export const cartAction=cartSlice.actions
export default cartSlice