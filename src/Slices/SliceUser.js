import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    getUserData: null,
    getUserDataCard: JSON.parse(localStorage.getItem('products')) || [],
  },
  reducers: {
    ProdactSlice: (state, action) => {
      state.getUserData = action.payload;
    },
    AddToCard: (state, action) => {
      // Update the state with the new cart data
      state.getUserDataCard = action.payload;
    }
  },
});

export const { ProdactSlice, AddToCard } = counterSlice.actions;

export default counterSlice.reducer;

