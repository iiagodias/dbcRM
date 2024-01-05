import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favoriteReducer';

const store = configureStore({
  reducer: {
    favorite: favoriteReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
