import { useTheme } from "../../hooks/ThemeContext";
import logo from "../../assets/images/logo/logo_only.png";

const Logo = () => {
  const isMobile = window.innerWidth < 1023;
  const { theme } = useTheme();
  return (
    <div className={`logo-content ${theme}-mode`}>
      <a href="#home">
        <img
          id={isMobile ? "mobile_img-logo" : "desktop_img-logo"}
          src={logo}
          alt="Logo"
        />
      </a>
    </div>
  );
};

export default Logo;
