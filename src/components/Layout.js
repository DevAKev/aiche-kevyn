import { useState, useEffect } from "react";
import { useTheme } from "@hooks/ThemeContext";
import Header from "@components/Header/Header";
import MilkyWay from "@components/Animations/MilkyWay";
import StartBtn from "@assets/images/buttons/start-button.webp";
import ClickStart from "@assets/sounds/click_start.mp3";
import Socials from "@components/Home/Socials";
import MobileNavBar from "@components/Header/MobileNavbar";

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
          <div className="animation-container">
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
          </div>
        </>
      ) : (
        <>
          <MilkyWay />
          {/* Start button */}
          <div
            className="start-container"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              width: "200px",
              height: "200px",
              animation: "fadeIn 2s",
            }}
          >
            <button
              aria-label="Start button"
              className="start-button"
              type="button"
              alt="Start button"
              id="start-button"
              onClick={() => requestAnimationFrame(handleClick)}
              style={{
                backgroundImage: `url(${StartBtn})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                borderStyle: "none",
                borderRadius: "50px",
                width: "100%",
                height: "80%",
                transition: "transform 0.1s, box-shadow 0.1s",
                cursor: "pointer",
              }}
            ></button>
          </div>
        </>
      )}
      {isStarted && isMobile && <MobileNavBar />}
    </main>
  );
};

export default Layout;
