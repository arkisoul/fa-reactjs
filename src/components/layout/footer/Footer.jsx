import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>
          &copy; all rights reserved <br />
          Made with <span className="text-red">&hearts;</span> by Reactilicious
        </small>
      </div>
    </footer>
  );
}
