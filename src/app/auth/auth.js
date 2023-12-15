import { createSlice } from '@reduxjs/toolkit';
import { AuthService } from '../../services/AuthService';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
  isAuthenticated: Boolean(localStorage.getItem('authToken')),
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
    logout: (state) => {
      state.error = null;
      state.user = null;
      state.isAuthenticated = false;
    },
    startLogin: (state) => {
      state.error = null;
      state.isFetching = true;
    },
    successLogin: (state, action) => {
      state.error = null;
      state.isFetching = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    failureLogin: (state, action) => {
      state.error = action.payload.error;
      state.isFetching = false;
      state.isAuthenticated = false;
      state.user = null;
    },
  }
});

export const authReducer = authSlice.reducer;
export const { startRegister, successRegister, failureRegister, logout, startLogin, successLogin, failureLogin } = authSlice.actions;

// thunk function creator
export const registerUser = (user, navigate) => {
  // thunk function
  return async (dispatch) => {
    try {
      dispatch(startRegister());
      const res = await AuthService.register(user);
      const { accessToken, user: userDetails } = res;
      dispatch(successRegister({ user: userDetails }));
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate('/todos');
    } catch (error) {
      console.error(error);
      dispatch(failureRegister(error))
    }
  }
}

export const loginUser = (user, navigate) => {
  // thunk function
  return async (dispatch) => {
    try {
      dispatch(startLogin());
      const res = await AuthService.login(user);
      const { accessToken, user: userDetails } = res;
      dispatch(successLogin({ user: userDetails }));
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate('/todos');
    } catch (error) {
      console.error(error);
      dispatch(failureLogin(error))
    }
  }
}