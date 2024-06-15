import { useState, useEffect } from "react";
import { useTheme } from "../hooks/ThemeContext";
import Header from "../components/Header/Header";
import MilkyWay from "./Animations/MilkyWay";
import ClickStart from "../assets/sounds/click_start.mp3";
import Socials from "./Home/Socials";
import MobileNavBar from "./Header/MobileNavbar";

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const [isStarted, setIsStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1023);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <main className={`app-container ${theme}-mode`}>
      {isStarted && <Header />}
      {!isMobile && (
        <nav>
          <Socials />
        </nav>
      )}
      {isStarted ? (
        <>
          <div className="content-container">{children}</div>
          <div className="scroll-icon-container">
            <button
              aria-label="Scroll down"
              className="down-icon"
              type="button"
              alt="Scroll down"
              loading="lazy"
              onClick={handleScroll}
            ></button>
          </div>
        </>
      ) : (
        <>
          <MilkyWay />
          {/* Start button */}
          <div className="start-container">
            <button
              aria-label="Start button"
              className="start-button"
              type="button"
              alt="Start button"
              loading="lazy"
              id="start-button"
              onClick={handleClick}
            ></button>
          </div>
        </>
      )}
      {isStarted && isMobile && <MobileNavBar />}
    </main>
  );
};

export default Layout;
