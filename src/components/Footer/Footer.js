import { useState, useEffect } from "react";
import MobileFooter from "@components/Footer/MobileFooter";
import DesktopFooter from "@components/Footer/DesktopFooter";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;
