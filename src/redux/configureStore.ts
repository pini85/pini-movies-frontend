import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { uiSlice, UIState } from './slices/ui.slice';
import { userSlice, UserState } from './slices/user.slice';

export interface RootState {
  ui: UIState;
  user: UserState;
}

const reducers = combineReducers({
  ui: uiSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
