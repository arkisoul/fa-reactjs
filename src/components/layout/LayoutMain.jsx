import React, { useMemo } from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import "./LayoutMain.css";

export function LayoutMain({ children, isAuthenticated }) {
  const layoutClasses = useMemo(() => {
    const layoutClasses = ["layout", "app-layout"];
    if (!isAuthenticated) layoutClasses.push("layout--no-sidebar");
    return layoutClasses.join(" ");
  }, [isAuthenticated]);
  return (
    <div className={layoutClasses}>
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="content content-main">
        <div className="container">{children}</div>
      </main>
      {isAuthenticated ? <Sidebar /> : null}
      <Footer />
    </div>
  );
}
