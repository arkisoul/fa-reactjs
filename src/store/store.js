import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from '../app/auth/auth';

// createStore, combineReducer -> rootReducer, compose ([middlewares])  redux-thunk, redux dev tool extension middleware
export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})