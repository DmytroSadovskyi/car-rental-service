import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],

  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
    
    removeFromFavorites: (state, action) => {
      return state.filter(car => car.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
