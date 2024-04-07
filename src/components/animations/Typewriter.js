import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const descriptionSection = document.querySelector(".my-desc");

    if (descriptionSection) {
      const rect = descriptionSection.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <p className={`my-desc typewriter ${isVisible ? "visible" : ""}`}>{text}</p>
  );
};

export default Typewriter;
