/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Validators } from "../utils/validators";
import {
  startRegister,
  successRegister,
  failureRegister,
} from "../../app/auth/auth";

const initialState = {
  user: {
    email: "",
    password: "",
  },
  errors: {
    email: "",
    password: "",
  },
};

const ActionTypes = {
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
  ERRORS: "ERRORS",
};

const emailAction = (value) => {
  return {
    type: ActionTypes.EMAIL,
    payload: value,
  };
};

const passwordAction = (value) => {
  return {
    type: ActionTypes.PASSWORD,
    payload: value
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EMAIL:
      return { ...state, user: { ...state.user, email: action.payload } };
    case ActionTypes.PASSWORD:
      return { ...state, user: { ...state.user, password: action.payload } };
    case ActionTypes.ERRORS:
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
};

export const AuthHoc = (Component, AuthServiceCall) => {
  return () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
    const reduxDispatch = useDispatch();
    const { user, errors } = state;

    const handleAuthSubmit = async (e) => {
      e.preventDefault();
      if (
        errors.email.required ||
        errors.email.email ||
        errors.password.required
      ) {
        return;
      }

      try {
        reduxDispatch(startRegister());
        const res = await AuthServiceCall(user);
        const { accessToken, user: userDetails } = res;
        reduxDispatch(successRegister({ user: userDetails }));
        localStorage.setItem("authToken", accessToken);
        localStorage.setItem("user", JSON.stringify(userDetails));
        navigate("/todos");
      } catch (error) {
        reduxDispatch(failureRegister({ error }));
        console.error(error);
      }
    };

    const handleEmailChange = (e) => {
      const value = e.target.value;
      const emailError = {};
      if (!Validators.email(value)) {
        emailError.email = "Invlaid email";
      }
      if (!Validators.required(value)) {
        emailError.required = "Email is required";
      }
      dispatch(emailAction(value));
      dispatch({ type: ActionTypes.ERRORS, payload: { email: emailError } });
    };

    const handlePasswordChange = (e) => {
      const value = e.target.value;
      const passError = {};
      if (!Validators.required(value)) {
        passError.required = "Password is required";
      }
      dispatch(passwordAction(value));
      dispatch({ type: ActionTypes.ERRORS, payload: { password: passError } });
    };

    return <Component handleAuthSubmit={handleAuthSubmit} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} authState={state} />
  }
}