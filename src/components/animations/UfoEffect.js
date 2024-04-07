import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/ThemeContext";

const UfoEffect = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const ufoTrigger = document.querySelector(".flying-saucer");

    if (ufoTrigger) {
      const rect = ufoTrigger.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ufoImage = theme === "light" ? "./ufo_green.png" : "./ufo.png";

  return (
    <img
      src={ufoImage}
      alt="Flying Saucer"
      className={`flying-saucer ${isVisible ? "show-saucer" : ""}`}
    />
  );
};

export default UfoEffect;
