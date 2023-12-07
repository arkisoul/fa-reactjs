import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";
import { Validators } from "../../../shared/utils/validators";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: {}, password: {} });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailError = {};
    if (!Validators.email(value)) {
      emailError.email = "Invlaid email";
    }
    if (!Validators.required(value)) {
      emailError.required = "Email is required";
    }
    setErrors({ ...errors, email: emailError });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passError = {};
    if (!Validators.required(value)) {
      passError.required = "Password is required";
    }
    setErrors({ ...errors, password: passError });
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
      const res = await AuthService.register({ email, password });
      const { accessToken, user } = res;
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/todos");
    } catch (error) {
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
