import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../logo.svg";
import "./Navbar.css";

export function Navbar({ isAuthenticated }) {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/">
          <img className="logo" src={logo} alt="App Logo" />
        </NavLink>
        <menu className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isAuthenticated ? (
            <React.Fragment>
              <li>
                <NavLink to="/todos">Todos</NavLink>
              </li>
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </menu>
      </nav>
    </header>
  );
}
