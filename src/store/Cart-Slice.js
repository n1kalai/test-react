import {createSlice} from '@reduxjs/toolkit'

const cartslice = createSlice({
    name : "cart",
    initialstate : {
        cartname: "levani"
    },
    reducers: {
        addiTemtoCart(state, action){
            state.cartname = "salome"
        }
    }
})

export const caractions = cartslice.actions
export default cartslice;