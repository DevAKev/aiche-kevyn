import { useTheme } from "../../hooks/ThemeContext";
// Theme Icons
import darkModeIcon from "../../assets/images/theme/dark_emoji.png";
import lightModeIcon from "../../assets/images/theme/light_emoji.png";
// Language Icons
import fr_flag from "../../assets/images/flags/fr_flag.png";
import uk_flag from "../../assets/images/flags/uk_flag.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
// Socials Icons
import { ReactComponent as FbIcon } from "../../assets/images/socials/facebook-icon.svg";
import { ReactComponent as TwitIcon } from "../../assets/images/socials/twitter-icon.svg";
import { ReactComponent as InstaIcon } from "../../assets/images/socials/instagram-icon.svg";
import { ReactComponent as LinkIcon } from "../../assets/images/socials/linkedin-icon.svg";
import { ReactComponent as GitIcon } from "../../assets/images/socials/github-icon.svg";

// ### DESKTOP NAVBAR ###
const DesktopNavBar = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();

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
    <ScrollAnimation
      animateIn="animate__flipInY"
      animateOnce={true}
      duration={2} // 2 seconds
    >
      <div className={`navigation ${theme}-mode`}>
        {/* Socials Media Icons */}
        <p className="desktop_socials-title">
          {language === "en" ? "Follow me" : "Suivez moi"}
        </p>
        <div className="navbar__desktop-socials-links desktop-socials-links">
          {socialsLinks.map((link, index) => (
            <a
              title={link.name}
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon
                loading="lazy"
                className="desktop-socials-icon"
                alt={`${link.name} Icon`}
              />
            </a>
          ))}
        </div>

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
