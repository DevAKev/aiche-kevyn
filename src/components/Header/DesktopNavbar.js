import { useTheme } from "../../hooks/ThemeContext";
import darkModeIcon from "../../assets/images/theme/dark_emoji.png";
import lightModeIcon from "../../assets/images/theme/light_emoji.png";
import fr_flag from "../../assets/images/flags/fr_flag.png";
import uk_flag from "../../assets/images/flags/uk_flag.png";

// ### DESKTOP NAVBAR ###
const DesktopNavBar = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

  return (
    <div className={`navigation ${theme}-mode`}>
      {/* Icons for the themes modes */}
      <div className="desktop_theme-language_container">
        <div className="desktop_theme-toggle" onClick={toggleTheme}>
          <img
            className="desktop_theme-icon"
            src={theme === "light" ? darkModeIcon : lightModeIcon}
            alt="Theme Toggle Icon"
          />
        </div>
        {/* Icons for language toggles */}
        <div className="language-toggle" onClick={toggleLanguage}>
          {language === "en" ? (
            <>
              <span className="span-language">FR</span>
              <img className="img-language" src={fr_flag} alt="French Flag" />
            </>
          ) : (
            <>
              <span className="span-language">EN</span>
              <img className="img-language" src={uk_flag} alt="English Flag" />
            </>
          )}
        </div>
      </div>
      <div className="desktop_navbar_container">
        <ul>
          <a
            href="#home"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>{language === "en" ? "HOME" : "ACCUEIL"}</li>
          </a>

          <a
            href="#services"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>{language === "en" ? "SERVICES" : "SERVICES"}</li>
          </a>

          <a
            href="#skills"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>{language === "en" ? "SKILLS" : "COMPETENCES"}</li>
          </a>

          <a
            href="#projets"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>{language === "en" ? "PROJECTS" : "PROJETS"}</li>
          </a>

          <a
            href="#about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>{language === "en" ? "ABOUT" : "À PROPOS"}</li>
          </a>
          <a
            href="#contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>{language === "en" ? "CONTACT" : "CONTACT"}</li>
          </a>
        </ul>
        {/* ### TO DO: AJOUTER LIENS RESEAUX SOCIAUX (VOIR https://www.onyedika.xyz/) ### */}
      </div>
    </div>
  );
};

export default DesktopNavBar;
