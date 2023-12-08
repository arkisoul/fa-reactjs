import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthService } from "../../../services/AuthService";
import { Validators } from "../../../shared/utils/validators";
import {
  startRegister,
  successRegister,
  failureRegister,
} from "../../../app/auth/auth";

const initialState = {
  email: "",
  password: "",
  errors: {
    email: "",
    password: "",
  },
  isAuthenticated: false,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EMAIL:
      return { ...state, email: action.payload };
    case ActionTypes.PASSWORD:
      return { ...state, password: action.payload };
    case ActionTypes.ERRORS:
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
};

export function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();
  const { email, password, errors } = state;

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
    dispatch({ type: ActionTypes.PASSWORD, payload: value });
    dispatch({ type: ActionTypes.ERRORS, payload: { password: passError } });
  };

  const handleRegister = async (e) => {
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
      const res = await AuthService.register({ email, password });
      const { accessToken, user } = res;
      reduxDispatch(successRegister({ user: user }));
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/todos");
    } catch (error) {
      reduxDispatch(failureRegister({ error }));
      console.error(error);
    }
  };

  return (
    <div className="auth auth-register space">
      <h2>Welcome, create a free account!</h2>
      <form className="space">
        <div className="form-group">
          <label htmlFor="email" className="sr-only">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Your email address"
            id="email"
            name="email"
            autoComplete="false"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email.required ? (
            <small className="form-error">{errors.email.required}</small>
          ) : null}
          {errors.email.email ? (
            <small className="form-error">{errors.email.email}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Your password"
            id="password"
            name="password"
            autoComplete="false"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password.required ? (
            <small className="form-error">{errors.password.required}</small>
          ) : null}
        </div>
        <div className="form-group form-actions">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              errors.email.required ||
              errors.email.email ||
              errors.password.required
            }
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <div>
          <small>
            Already have an account, <Link to="/login">Login</Link>
          </small>
        </div>
      </form>
    </div>
  );
}
