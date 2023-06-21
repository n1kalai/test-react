import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", password: "", isSignedIn: false };

const userReducer = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUser() {},
		setUser(state, action) {
			state = { ...action.payload };
			return state;
		},
	},
});

export const { getUser, setUser } = userReducer.actions;
export default userReducer.reducer;
