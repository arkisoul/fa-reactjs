import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../logo.svg";

export function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/">
          <img src={logo} alt="App Logo" />
        </NavLink>
        <menu className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </menu>
      </nav>
    </header>
  );
}
