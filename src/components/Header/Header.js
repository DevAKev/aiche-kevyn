import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import Logo from "../Home/Logo";
import MobileNavBar from "./MobileNavbar";
import DesktopNavBar from "./DesktopNavbar";

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
