import React from "react";
import { Link } from "react-router-dom";

export function Login() {
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
          />
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
          />
        </div>
        <div className="form-group form-actions">
          <button type="submit" className="btn btn-primary">
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
