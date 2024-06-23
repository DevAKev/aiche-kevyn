import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Logo from "@components/Home/Logo";
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

  // Progress Bar
  window.onscroll = function () {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  };

  return (
    <>
      <div id="progress-bar" className="progress-bar"></div>
      <header className={`box ${className} header`}>
        <div className="box1">
          <div className="flex_row">
            <div
              className={
                isMobile ? "mobile-logo-container" : "desktop-logo-container"
              }
            >
              {/* Logo */}
              <Logo />
            </div>
            {!isMobile && <DesktopNavBar />}
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
