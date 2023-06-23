import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isError: false,
  data: [],
}

export const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    addItems(state, action) {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    }
  }
})

export const { addItems } = cocktailSlice.actions;
export default cocktailSlice.reducer;