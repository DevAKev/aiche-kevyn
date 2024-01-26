import React from "react";
import { useTheme } from "../hooks/ThemeContext";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <div className={`logo-container ${theme}-mode`}>
      {/* images imported from the "img" tag are accessible from public folder */}
      <img id="img-logo" src="./galaxy.png" alt="galaxy logo" />
    </div>
  );
};

export default Logo;
