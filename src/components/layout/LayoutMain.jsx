import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";

export function LayoutMain({ children, header, footer, sidebar }) {
  console.log(children);
  return (
    <div className="layout app-layout">
      <Navbar />
      {header ? header : null}
      <main className="content content-main">
        {children}
        <Sidebar />
        {sidebar}
      </main>
      {footer}
      <Footer />
    </div>
  );
}
