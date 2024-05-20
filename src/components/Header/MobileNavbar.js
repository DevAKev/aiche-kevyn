import { useState } from "react";
import { useTheme } from "../../hooks/ThemeContext";
import darkModeIcon from "../../assets/images/theme/dark_emoji.png";
import lightModeIcon from "../../assets/images/theme/light_emoji.png";
import fr_flag from "../../assets/images/flags/fr_flag.png";
import uk_flag from "../../assets/images/flags/uk_flag.png";

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
            {language === "en" ? "HOME" : "ACCUEIL"}
          </a>
        </li>

        <li className={`navbar__item slideInDown2`}>
          <a href="#services" className="mobile_subtitle2">
            {language === "en" ? "SERVICES" : "SERVICES"}
          </a>
        </li>

        <li className={`navbar__item slideInDown2`}>
          <a href="#skills" className="mobile_subtitle2">
            {language === "en" ? "SKILLS" : "COMPETENCES"}
          </a>
        </li>

        <li className={`navbar__item slideInDown2`}>
          <a href="#projets" className="mobile_subtitle2">
            {language === "en" ? "PROJECTS" : "PROJETS"}
          </a>
        </li>

        <li className={`navbar__item slideInDown3`}>
          <a href="#about" className="mobile_subtitle2">
            {language === "en" ? "ABOUT" : "À PROPOS"}
          </a>
        </li>

        <li className={`navbar__item slideInDown4`}>
          <a href="#contact" className="mobile_subtitle2">
            {language === "en" ? "CONTACT" : "CONTACT"}
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

export default MobileNavBar;
