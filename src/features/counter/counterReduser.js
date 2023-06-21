import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 10,
};

// const createSlice2 = () => {
//     return {
//         actions: {
//             increment,

//         },
//         reducer: () => {}
//     }
// }

const counterReduser = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		reset(state) {
			state.value = initialState.value;
		},
		setDynamicNumber(state, action) {
			state.value = action.payload;
		},
	},
});

export const { increment, decrement, reset, setDynamicNumber } =
	counterReduser.actions;
export default counterReduser.reducer;
