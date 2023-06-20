import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    visible: false,
}


const cartCountSclice = createSlice({
    name: 'cartcounter',
    initialState,
    reducers: {
        increment(state){
            state.value++;
            state.visible = true;
        }
    }
})

export const { increment } = cartCountSclice.actions;
export default cartCountSclice.reducer;