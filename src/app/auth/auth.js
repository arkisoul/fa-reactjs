import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  isFetching: false,
}

// immer
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startRegister: (state) => {
      state.error = null;
      state.isFetching = true;
    },
    successRegister: (state, action) => {
      state.error = null;
      state.isFetching = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    failureRegister: (state, action) => {
      state.error = action.payload.error;
      state.isFetching = false;
      state.isAuthenticated = false;
      state.user = null;
    },
  }
});

export const authReducer = authSlice.reducer;
export const { startRegister, successRegister, failureRegister } = authSlice.actions;