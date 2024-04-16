// import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/ThemeContext";
import fr_flag from "../assets/images/flags/fr_flag.png";
import uk_flag from "../assets/images/flags/uk_flag.png";
// import Logo from "./Home/Logo";

const Navigation = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

  // icons for the themes and language toggles
  return (
    <div className={`navigation ${theme}-mode`}>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌚" : "🌝"}
      </div>

      <div className="language-toggle" onClick={toggleLanguage}>
        {language === "en" ? (
          <>
            <span>EN</span>
            <img src={uk_flag} alt="English Flag" />
          </>
        ) : (
          <>
            <span>FR</span>
            <img src={fr_flag} alt="French Flag" />
          </>
        )}
      </div>
      {/* <div className="logo-container">
        <Logo />
      </div> */}
      {/* <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
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
      </div> */}
    </div>
  );
};

export default Navigation;
