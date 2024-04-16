// import Navigation from "./Navigation";
import { useTheme } from "../hooks/ThemeContext";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  // Use hook to get the actual theme mode
  const { theme } = useTheme();

  return (
    // Principal container with the theme class
    <div className={`app-container ${theme}-mode`}>
      {/* Navigation component */}
      <Header />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default Layout;
