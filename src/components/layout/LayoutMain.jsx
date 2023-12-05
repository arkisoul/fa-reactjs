import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import "./LayoutMain.css";

export function LayoutMain({ children }) {
  console.log(children);
  return (
    <div className="layout app-layout">
      <Navbar />
      <main className="content content-main">{children}</main>
      <Sidebar />
      <Footer />
    </div>
  );
}
