import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/ThemeContext";
import fr_flag from "../assets/flags/fr_flag.png";
import uk_flag from "../assets/flags/uk_flag.png";

const Navigation = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

  return (
    <div className={`navigation ${theme}-mode`}>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌚" : "🌝"}
      </div>

      <div className="language-toggle" onClick={toggleLanguage}>
        {language === "en" ? (
          <>
            <span style={{ display: "inline-block", marginRight: "5px" }}>
              EN
            </span>
            <img src={uk_flag} alt="English Flag" />
          </>
        ) : (
          <>
            <span style={{ display: "inline-block", marginRight: "5px" }}>
              FR
            </span>
            <img src={fr_flag} alt="French Flag" />
          </>
        )}
      </div>

      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>{language === "en" ? "HOME" : "ACCUEIL"}</li>
        </NavLink>

        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>{language === "en" ? "PROJECTS" : "PROJETS"}</li>
        </NavLink>

        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>{language === "en" ? "ABOUT" : "À PROPOS"}</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
