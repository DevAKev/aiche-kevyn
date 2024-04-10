import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

// // DesktopNavLink desktop menu link
// const DesktopNavLink = ({ text, href }) => (
//   <a href={href} className="desktop_subtitle">
//     {text}
//   </a>
// );
// // DesktopNavLink props validation
// DesktopNavLink.propTypes = {
//   text: PropTypes.string.isRequired,
//   href: PropTypes.string,
// };

// // MobileNavLink mobile menu link
// const MobileNavLink = ({ text, href }) => (
//   <div className="mobile_nav_link">
//     <a href={href} className="navbar__link">
//       {text}
//     </a>
//   </div>
// );
// // MobileNavLink props validation
// MobileNavLink.propTypes = {
//   text: PropTypes.string.isRequired,
//   href: PropTypes.string.isRequired,
// };
// // Mobile menu subtitles links
// const SubtitlesContainer = ({ text, href }) => (
//   <div className="slideInDown1">
//     <div className="subtitle_group">
//       <a href={href} className="mobile_subtitle2">
//         {text}
//       </a>
//     </div>
//   </div>
// );

// // SubtitlesContainer props validation
// SubtitlesContainer.propTypes = {
//   text: PropTypes.string.isRequired,
//   href: PropTypes.string.isRequired,
// };

// Desktop Navigation
<DesktopNavBar />;

// Mobile Navigation
<MobileNavBar />;

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
