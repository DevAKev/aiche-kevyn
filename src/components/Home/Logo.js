import { useTheme } from "../../hooks/ThemeContext";
import logo from "../../assets/images/logo/Logo_only.png";

const Logo = () => {
  const isMobile = window.innerWidth < 1023;
  const { theme } = useTheme();
  return (
    <div className={`logo-content ${theme}-mode`}>
      <a href="/">
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
