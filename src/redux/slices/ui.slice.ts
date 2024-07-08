import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UIState = {
  theme: string;
  spinner: string;
  headerHeight: number;
};
const initialState: UIState = {
  theme: 'default-theme',
  spinner: 'camera',
  headerHeight: 0,
};
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setSpinner: (state, action: PayloadAction<string>) => {
      state.spinner = action.payload;
    },
    setHeaderHeight: (state, action: PayloadAction<number>) => {
      state.headerHeight = action.payload;
    },
  },
});

export const { setTheme, setSpinner, setHeaderHeight } = uiSlice.actions;

export default uiSlice.reducer;
