import React from "react";
import { Link } from "react-router-dom";

export function Register() {
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
