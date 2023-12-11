import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import "./LayoutMain.css";

export function LayoutMain({ children, isAuthenticated }) {
  return (
    <div className="layout app-layout">
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="content content-main">{children}</main>
      <Sidebar />
      <Footer />
    </div>
  );
}
