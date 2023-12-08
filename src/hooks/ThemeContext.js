// Context theme hook for the global theme mode
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ThemeContext = createContext();

// Create the hook to get the actual theme mode
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create the provider to change the theme mode
export const ThemeProvider = ({ children }) => {
  // Get the actual theme mode from the local storage or set light mode default
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  // Function to toggle the theme mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Use effect to update the theme attribute in the DOM
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
