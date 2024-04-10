import { useTheme } from "../../hooks/ThemeContext";
import logo from "../../assets/logo/galaxy.png";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <div className={`logo-container ${theme}-mode`}>
      <img id="img-logo" src={logo} alt="galaxy logo" />
    </div>
  );
};

export default Logo;
