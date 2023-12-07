import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";
import { Validators } from "../../../shared/utils/validators";

export function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: {}, password: {} });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUser({ ...user, [id]: value });
    const userError = {};
    if (id === "email" && !Validators.email(value)) {
      userError.email = true;
    }
    if (!Validators.required(value)) {
      userError.required = true;
    }
    setErrors({ ...errors, [id]: userError });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      errors.email.required ||
      errors.email.email ||
      errors.password.required
    ) {
      return;
    }

    try {
      const res = await AuthService.login(user);
      const { accessToken, user: userDetails } = res;
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate("/todos");
    } catch (error) {
      console.error(error);
    }
  };

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
            onChange={handleUserChange}
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
            onChange={handleUserChange}
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
            onClick={handleLogin}
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
