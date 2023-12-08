import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/ThemeContext";

const Navigation = () => {
  // Use the actual theme and the function to toggle it from the context
  const { theme, toggleTheme } = useTheme();

  return (
    // Add the theme class to the navigation container
    <div className={`navigation ${theme}-mode`}>
      {/* Add the theme toggle button */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {/* Icons dark mode & light mode */}
        {theme === "light" ? "🌚" : "🌝"}
      </div>

      {/* NavLink list */}
      <ul>
        {/* Home */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>ACCUEIL</li>
        </NavLink>

        {/* Projects */}
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>PROJETS</li>
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>À PROPOS</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
