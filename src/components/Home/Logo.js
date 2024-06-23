import { useTheme } from "@hooks/ThemeContext";
import logo from "@assets/images/logo/devakev-logo.webp";

const Logo = () => {
  const isMobile = window.innerWidth < 1023;
  const { theme } = useTheme();
  return (
    <div className={`company-logo-container ${theme}-mode`}>
      <a href="#home">
        <img
          loading="lazy"
          id={isMobile ? "mobile-logo" : "desktop-logo"}
          src={logo}
          alt="Logo de Devakev"
        />
      </a>
    </div>
  );
};

export default Logo;
