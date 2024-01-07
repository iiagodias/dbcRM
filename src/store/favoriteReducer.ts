import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '../types/characters';

export interface FavoriteState {
  favoritesCharacters: ICharacter[];
}

const initialState: FavoriteState = {
  favoritesCharacters: [],
};

const favoriteSlice = createSlice({
  name: 'favoriteReducer',
  initialState,
  reducers: {
    setFavoriteCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.favoritesCharacters = action.payload;
    },
  },
});

export const { setFavoriteCharacters } = favoriteSlice.actions;

export default favoriteSlice;
