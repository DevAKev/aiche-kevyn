// Star.js
import React from "react";
import { useTheme } from "../hooks/ThemeContext";

const Star = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`star ${theme === "light" ? "light-mode" : "dark-mode"}`}
    ></div>
  );
};

export default Star;
