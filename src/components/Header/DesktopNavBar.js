import { useTheme } from "../../hooks/ThemeContext";
import fr_flag from "../../assets/images/flags/fr_flag.png";
import uk_flag from "../../assets/images/flags/uk_flag.png";

const DesktopNavBar = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

  return (
    <>
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
      </div>

      {/* <div className="dropdown">
        <a href="/services" className="desktop_subtitle">
          Nos services
        </a>
        <div className="dropdownContent">
          <a href="/andragogue" className="desktop_subtitle">
            Je cherche un formateur
          </a>
          <a href="/">Offres de missions</a>
          <a href="/">Conception de contenu pédagogique</a>
        </div>
      </div>

      <div className="dropdown">
        <a href="/resources" className="desktop_subtitle">
          Nos ressources
        </a>
        <div className="dropdownContent">
          <a href="/prompts">Notre librairie de prompt</a>
          <a href="/">...</a>
        </div>
      </div>

      <a href="/about" className="desktop_subtitle">
        À propos
      </a>

      <div className="login_container">
        <a href="/signin" className="login_subtitle">
          Connexion
        </a>
      </div> */}
    </>
  );
};

export default DesktopNavBar;
