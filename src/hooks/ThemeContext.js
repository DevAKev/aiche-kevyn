// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const storedLanguage = localStorage.getItem("language") || "fr";
  const [theme, setTheme] = useState(storedTheme);
  const [language, setLanguage] = useState(storedLanguage);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, language, toggleLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
