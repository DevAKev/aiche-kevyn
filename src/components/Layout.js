import React from "react";
import Navigation from "./Navigation";
import { useTheme } from "../hooks/ThemeContext";

const Layout = ({ children }) => {
  // Use hook to get the actual theme mode
  const { theme } = useTheme();

  return (
    // Principal container with the theme class
    <div className={`app-container ${theme}-mode`}>
      {/* Navigation component */}
      <Navigation />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default Layout;
