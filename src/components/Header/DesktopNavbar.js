import { useTheme } from "../../hooks/ThemeContext";
// Theme Icons
import darkModeIcon from "../../assets/images/theme/dark_emoji.png";
import lightModeIcon from "../../assets/images/theme/light_emoji.png";
// Language Icons
import fr_flag from "../../assets/images/flags/fr_flag.png";
import uk_flag from "../../assets/images/flags/uk_flag.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

// ### DESKTOP NAVBAR ###
const DesktopNavBar = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

  return (
    <ScrollAnimation
      animateIn="animate__backInDown"
      animateOnce={true}
      duration={2}
    >
      <div className={`navigation ${theme}-mode`}>
        {/* Icons for the themes modes */}
        <div className="desktop_theme-language_container">
          <div className="desktop_theme-toggle" onClick={toggleTheme}>
            <img
              loading="lazy"
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
                <img
                  loading="lazy"
                  className="img-language"
                  src={fr_flag}
                  alt="French Flag"
                />
              </>
            ) : (
              <>
                <span className="span-language">EN</span>
                <img
                  loading="lazy"
                  className="img-language"
                  src={uk_flag}
                  alt="English Flag"
                />
              </>
            )}
          </div>
        </div>
        <nav className="desktop_navbar_container">
          <ul>
            <a href="#home">
              <li>{language === "en" ? "HOME" : "ACCUEIL"}</li>
            </a>

            <a href="#services">
              <li>{language === "en" ? "SERVICES" : "SERVICES"}</li>
            </a>

            {/* <a
            href="#skills"
          >
            <li>{language === "en" ? "SKILLS" : "COMPETENCES"}</li>
          </a> */}

            <a href="#projets">
              <li>{language === "en" ? "PROJECTS" : "PROJETS"}</li>
            </a>

            <a href="#about">
              <li>{language === "en" ? "ABOUT" : "À PROPOS"}</li>
            </a>
            <a href="#contact">
              <li>{language === "en" ? "CONTACT" : "CONTACT"}</li>
            </a>
          </ul>
        </nav>
      </div>
    </ScrollAnimation>
  );
};

export default DesktopNavBar;
