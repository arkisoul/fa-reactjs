import React from "react";
import { Link } from "react-router-dom";
import { AuthHoc } from "../../../shared/hoc/auth.hoc";
import { loginUser } from "../../../app/auth/auth";

function LoginComponent({
  handleEmailChange,
  handlePasswordChange,
  handleAuthSubmit,
  authState,
}) {
  const { user, errors } = authState;

  return (
    <div className="auth auth-login space">
      <h2>Welcome, back!</h2>
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
            value={user.email}
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
            value={user.password}
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
            onClick={handleAuthSubmit}
          >
            Login
          </button>
        </div>
        <div>
          <small>
            Do not have an account, <Link to="/register">Register here</Link>
          </small>
        </div>
      </form>
    </div>
  );
}

export const Login = AuthHoc(LoginComponent, loginUser);
