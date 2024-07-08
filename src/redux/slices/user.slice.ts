import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  user: any;
  savedMoves: any[];
};

const initialState: UserState = {
  user: null,
  savedMoves: [],
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setCredit: (state, action) => {
      state.user.credit = action.payload;
    },
    setMovies: (state, action) => {
      state.savedMoves = action.payload;
    },
  },
});

export const { setUser, setCredit, setMovies } = userSlice.actions;

export default userSlice.reducer;
