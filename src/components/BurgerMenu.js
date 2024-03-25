import PropTypes from "prop-types";
// import cn from "classnames";
import { useState, useEffect } from "react";
// import loginBtnImg from "@Assets/login_button_mobile.svg";

// DesktopNavLink desktop menu link
const DesktopNavLink = ({ text, href }) => (
  <a href={href} className="desktop_subtitle">
    {text}
  </a>
);
// DesktopNavLink props validation
DesktopNavLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

// MobileNavLink mobile menu link
const MobileNavLink = ({ text, href }) => (
  <div className="mobile_nav_link">
    <a href={href} className="navbar__link">
      {text}
    </a>
  </div>
);
// MobileNavLink props validation
MobileNavLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
// Mobile menu subtitles links
const SubtitlesContainer = ({ text, href }) => (
  <div className="slideInDown1">
    <div className="subtitle_group">
      <a href={href} className="mobile_subtitle2">
        {text}
      </a>
    </div>
  </div>
);

// SubtitlesContainer props validation
SubtitlesContainer.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

// Desktop Navigation
const DesktopNavBar = () => (
  <>
    <div className="dropdown">
      <DesktopNavLink text="Nos services" href="/services" />
      <div className="dropdownContent">
        <a href="/andragogue" className="desktop_subtitle">
          Je cherche un formateur
        </a>
        <a href="/">Offres de missions</a>
        <a href="/">Conception de contenu pédagogique</a>
      </div>
    </div>
    <div className="dropdown">
      <DesktopNavLink text="Nos ressources" href="/resources" />
      <div className="dropdownContent">
        <a href="/prompts">Notre librairie de prompt</a>
        <a href="/">...</a>
      </div>
    </div>
    <DesktopNavLink text="À propos" href="/about" />
    <div className="login_container">
      <a href="/signin" className="login_subtitle">
        Connexion
      </a>
    </div>
  </>
);

// Mobile Navigation
const MobileNavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
      <ul className="navbar__links">
        <li className={`navbar__item slideInDown1`}>
          <MobileNavLink text="Nos services" href="/services" />
          <a className="trainingSubtitle" href="/andragogue">
            Je cherche un formateur
          </a>
          <SubtitlesContainer text="Offres de missions" href="/missions" />
          <SubtitlesContainer
            text="Conception de contenu pédagogique"
            href="#"
          />
        </li>
        <li className={`navbar__item slideInDown2`}>
          <MobileNavLink text="Nos ressources" href="/ressources" />
          <SubtitlesContainer
            text="Notre librairie de prompt"
            href="/prompts"
          />
        </li>
        <li className={`navbar__item slideInDown3`}>
          <MobileNavLink text="À propos" href="/about" />
        </li>
        <li className={`navbar__item slideInDown4`}>
          <div className="login_container_mobile">
            <a href="/signin">
              {/* <img
                className="login_button_mobile"
                src={loginBtnImg}
                alt="Login button"
              /> */}
            </a>
          </div>
        </li>
      </ul>

      <button onClick={handleShowLinks} className="navbar__burger">
        <span className="burger__bar"></span>
      </button>
    </nav>
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
          {/* Logos */}
          {/* <a href="/" className="logo_nav">
            <img
              src={
                isMobile
                  ? "./cartoon-logo.png"
                  : "/assets/918b81f32c6c4f450d9614d841338c59.png"
              }
              alt="logo nav"
            />
          </a> */}
          {isMobile ? <MobileNavBar /> : <DesktopNavBar />}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
