import { createSlice } from '@reduxjs/toolkit';

export interface FavoriteState {
  favoritesCharacters: [];
}

const initialState: FavoriteState = {
  favoritesCharacters: [],
};

const favoriteSlice = createSlice({
  name: 'favoriteReducer',
  initialState,
  reducers: {
    setFavoriteCharacters: () => {},
  },
});

export const { setFavoriteCharacters } = favoriteSlice.actions;

export default favoriteSlice;
