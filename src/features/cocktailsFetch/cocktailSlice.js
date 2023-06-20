import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async () => {
    const response = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    );
    return response.data.drinks;
  }
);

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default cocktailSlice.reducer;