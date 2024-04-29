// Layout.js
import { useState, useEffect } from "react";
import { useTheme } from "../hooks/ThemeContext";
import Header from "./Header/Header";
import MilkyWay from "./Animations/MilkyWay";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = () => {
    // Click play sound
    const audio = new Audio("/click_start.mp3");
    audio.play();

    // Effet d'enfoncement
    const startButton = document.querySelector(".start-button");
    startButton.style.transform = "scale(0.75)";

    // Loaded after 0.5 seconds
    setTimeout(() => {
      setIsStarted(true);
    }, 500); // 0.5 seconds
  };

  useEffect(() => {
    const startButton = document.querySelector(".start-button");

    const handleMouseUp = () => {
      startButton.style.transform = "scale(1)";
    };

    startButton.addEventListener("mouseup", handleMouseUp);

    // Clean up the event listener
    return () => {
      startButton.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className={`app-container ${theme}-mode`}>
      {isStarted ? (
        <>
          {/* Header component */}
          <Header />
          <div className="content-container">{children}</div>
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <MilkyWay />
          <div className="start-container">
            <div className="start-button" onClick={handleClick}>
              {/* START */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
