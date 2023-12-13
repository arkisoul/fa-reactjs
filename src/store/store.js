import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from '../app/auth/auth';
import { todoReducer } from "../app/todo/todo";

// createStore, combineReducer -> rootReducer, compose ([middlewares]), applyMiddleware  redux-thunk, redux dev tool extension middleware
export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
})