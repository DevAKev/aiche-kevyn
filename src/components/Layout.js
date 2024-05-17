import { useState, useEffect } from "react";
import { useTheme } from "../hooks/ThemeContext";
import Header from "../components/Header/Header";
import MilkyWay from "./Animations/MilkyWay";
import ClickStart from "../assets/sounds/click_start.mp3";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = () => {
    // Click play sound
    const audio = new Audio(ClickStart);
    audio.play();

    // Loaded after 0.5 seconds
    setTimeout(() => {
      setIsStarted(true);
    }, 500); // 0.5 seconds
  };

  useEffect(() => {
    const startButton = document.getElementById("start-button");

    const handleMouseUp = () => {};

    startButton.addEventListener("mouseup", handleMouseUp);

    // Clean up the event listener
    return () => {
      startButton.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className={`app-container ${theme}-mode`}>
      {isStarted && <Header />}
      {isStarted ? (
        <>
          {/* <div className="background-img">
            <Header />
          </div> */}
          <div className="content-container">{children}</div>
          {/* <Footer /> */}
        </>
      ) : (
        <>
          <MilkyWay />
          {/* Start button */}
          <div className="start-container">
            <div id="start-button" onClick={handleClick}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
