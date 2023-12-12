import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import "./LayoutMain.css";

export function LayoutMain({ children, isAuthenticated }) {
  return (
    <div className="layout app-layout">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="content">
        <div className="container flex flex-row h-100">
          <main className="content-main">{children}</main>
          {isAuthenticated ? <Sidebar /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
