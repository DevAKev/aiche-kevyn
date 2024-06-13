import { useState } from "react";
import { useTheme } from "../../hooks/ThemeContext";
// Theme Icons
import darkModeIcon from "../../assets/images/theme/dark_emoji.png";
import lightModeIcon from "../../assets/images/theme/light_emoji.png";
// Language Icons
import fr_flag from "../../assets/images/flags/fr_flag.png";
import uk_flag from "../../assets/images/flags/uk_flag.png";
// Socials Icons
import { ReactComponent as FbIcon } from "../../assets/images/socials/facebook.svg";
import { ReactComponent as TwitIcon } from "../../assets/images/socials/twitter.svg";
import { ReactComponent as InstaIcon } from "../../assets/images/socials/instagram-icon.svg";
import { ReactComponent as LinkIcon } from "../../assets/images/socials/linkedin-icon.svg";
import { ReactComponent as GitIcon } from "../../assets/images/socials/github-icon.svg";

// ### MOBILE NAVBAR ###
const MobileNavBar = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();
  const [showLinks, setShowLinks] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleMouseOver = (index) => setIsHovered(index);
  const handleMouseOut = () => setIsHovered(null);

  const socialsLinks = [
    { name: "Facebook", url: "https://www.facebook.com/", icon: FbIcon },
    { name: "Twitter", url: "https://www.twitter.com/", icon: TwitIcon },
    { name: "Instagram", url: "https://www.instagram.com/", icon: InstaIcon },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kévyn-aiche",
      icon: LinkIcon,
    },
    { name: "GitHub", url: "https://github.com/DevAKev", icon: GitIcon },
  ];

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

        {/* Icons for the themes modes */}
        <li className={`navbar__item slideInDown4`}>
          <div className="mobile_theme-toggle" onClick={toggleTheme}>
            <img
              loading="lazy"
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
                <img loading="lazy" src={fr_flag} alt="French Flag" />
              </>
            ) : (
              <>
                <span>EN</span>
                <img loading="lazy" src={uk_flag} alt="English Flag" />
              </>
            )}
          </div>
        </li>

        {/* Social Media Icons */}
        <p className="mobile_socials-title">
          {language === "en" ? "Follow me" : "Suivez moi"}
        </p>
        <div className="navbar__socials-links socials-links">
          {socialsLinks.map((link, index) => (
            <li key={index} className={`navbar__item slideInDown${index + 5}`}>
              <div className="mobile_socials-container">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={handleMouseOut}
                >
                  <link.icon
                    loading="lazy"
                    className={`socials-icon ${
                      isHovered === index ? theme : ""
                    }`}
                    alt={`${link.name} Icon`}
                  />
                </a>
              </div>
            </li>
          ))}
        </div>
      </ul>

      <button onClick={handleShowLinks} className="navbar__burger">
        <span className="burger__bar"></span>
      </button>
    </nav>
  );
};

export default MobileNavBar;
