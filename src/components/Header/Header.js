import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/ThemeContext";
import fr_flag from "../../assets/images/flags/fr_flag.png";
import uk_flag from "../../assets/images/flags/uk_flag.png";
import darkModeIcon from "../../assets/images/theme/dark_emoji.png";
import lightModeIcon from "../../assets/images/theme/light_emoji.png";
import { NavLink } from "react-router-dom";
import Logo from "../Home/Logo";

// ### MOBILE NAVBAR ###
const MobileNavBar = ({ isMobile }) => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
      <ul className="navbar__links">
        <li className={`navbar__item slideInDown1`}>
          <a href="/" className="mobile_navLink_home">
            Accueil
          </a>
          <a href="/projets" className="mobile_subtitle2">
            Projets
          </a>
        </li>
        <li className={`navbar__item slideInDown2`}>
          <a href="/ressources" className="mobile_navbarLink">
            Nos ressources
          </a>
          <a href="/prompts" className="mobile_subtitle2">
            Notre librairie de prompt
          </a>
        </li>
        <li className={`navbar__item slideInDown3`}>
          <a href="/about" className="mobile_navbarLink">
            À propos
          </a>
        </li>
        <li className={`navbar__item slideInDown4`}>
          <a href="/contact" className="mobile_navbarLink">
            Contactez-moi
          </a>
        </li>
        {/* ### AJOUTER LIENS RESEAUX SOCIAUX (VOIR https://www.onyedika.xyz/) ### */}

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
      </div>
      <div className="desktop_navbar_container">
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
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>{language === "en" ? "CONTACT" : "CONTACT"}</li>
          </NavLink>
        </ul>
        {/* ### AJOUTER LIENS RESEAUX SOCIAUX (VOIR https://www.onyedika.xyz/) ### */}
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
