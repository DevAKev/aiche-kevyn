import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/ThemeContext";
import fr_flag from "../../assets/images/flags/fr_flag.png";
import uk_flag from "../../assets/images/flags/uk_flag.png";
import darkModeIcon from "../../assets/images/theme/dark_emoji.png";
import lightModeIcon from "../../assets/images/theme/light_emoji.png";
// import { NavLink } from "react-router-dom";
import Logo from "../Home/Logo";

// ### MOBILE NAVBAR ###
const MobileNavBar = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
      <ul className="navbar__links">
        <li className={`navbar__item slideInDown1`}>
          <a href="#home" className="mobile_navLink_home">
            Accueil
          </a>
        </li>

        <li className={`navbar__item slideInDown2`}>
          <a href="#services" className="mobile_subtitle2">
            Services
          </a>
        </li>

        <li className={`navbar__item slideInDown2`}>
          <a href="#skills" className="mobile_subtitle2">
            Compétences
          </a>
        </li>

        <li className={`navbar__item slideInDown2`}>
          <a href="#projets" className="mobile_subtitle2">
            Projets
          </a>
        </li>

        <li className={`navbar__item slideInDown3`}>
          <a href="#about" className="mobile_subtitle2">
            À propos
          </a>
        </li>

        <li className={`navbar__item slideInDown4`}>
          <a href="#contact" className="mobile_subtitle2">
            Contactez-moi
          </a>
        </li>

        {/* ### TO DO: AJOUTER LIENS RESEAUX SOCIAUX (VOIR https://www.onyedika.xyz/) ### */}

        {/* Icons for the themes modes */}
        <li className={`navbar__item slideInDown4`}>
          <div className="mobile_theme-toggle" onClick={toggleTheme}>
            <img
              className="mobile_theme-icon"
              src={theme === "light" ? darkModeIcon : lightModeIcon}
              alt="Theme Toggle Icon"
            />
          </div>

          {/*Icons for language toggles */}
          <div className="mobile_language-toggle" onClick={toggleLanguage}>
            {language === "en" ? (
              <>
                <span>FR</span>
                <img src={fr_flag} alt="French Flag" />
              </>
            ) : (
              <>
                <span>EN</span>
                <img src={uk_flag} alt="English Flag" />
              </>
            )}
          </div>
        </li>
      </ul>
      <button onClick={handleShowLinks} className="navbar__burger">
        <span className="burger__bar"></span>
      </button>
    </nav>
  );
};

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

// Header Component
const Header = ({ className }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`box ${className} header`}>
      <div className="box1">
        <div className="flex_row">
          <div
            className={
              isMobile ? "mobile_logo-container" : "desktop_logo-container"
            }
          >
            {/* Logo */}
            <Logo />
          </div>
          {isMobile ? <MobileNavBar isMobile={isMobile} /> : <DesktopNavBar />}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
