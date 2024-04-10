import { useState } from "react";
import { useTheme } from "../../hooks/ThemeContext";
import fr_flag from "../../assets/flags/fr_flag.png";
import uk_flag from "../../assets/flags/uk_flag.png";

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
          <a href="/services" className="mobile_nav_link">
            Nos services
          </a>
          <a className="trainingSubtitle" href="/andragogue">
            Je cherche un formateur
          </a>
          <a href="/missions" className="mobile_subtitle2">
            Offres de missions
          </a>
        </li>
        <li className={`navbar__item slideInDown2`}>
          <a href="/ressources" className="navbar__link">
            Nos ressources
          </a>
          <a href="/prompts" className="mobile_subtitle2">
            Notre librairie de prompt
          </a>
        </li>
        <li className={`navbar__item slideInDown3`}>
          <a href="/about" className="navbar__link">
            À propos
          </a>
        </li>
        <li className={`navbar__item slideInDown4`}>
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
        </li>
      </ul>
      <button onClick={handleShowLinks} className="navbar__burger">
        <span className="burger__bar"></span>
      </button>
    </nav>
  );
};

export default MobileNavBar;
