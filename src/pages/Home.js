import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useTheme } from "../hooks/ThemeContext";
import Skills from "../components/Skills";
import CardsProjects from "../components/CardsProjects";

// Component to display the home page
const Home = () => {
  const { language } = useTheme();

  const titleKey = language === "en" ? "Welcome" : "Bienvenue";
  const subtitleKey =
    language === "en"
      ? "I'm AICHE Kévyn, but you can call me DevAKev"
      : "Je suis AICHE Kévyn, mais vous pouvez m'appeler DevAKev";

  // Hook to display typewriter effect
  const [isVisible, setIsVisible] = useState("");

  const scrollToTop = () => {
    const descriptionSection = document.querySelector(".my-desc");

    if (descriptionSection) {
      const rect = descriptionSection
        /* getBoundingClientRect is a method that returns the size of an element and its position relative to the viewport. It returns an object with properties such as `top`, `bottom`, `left`, `right`, `width`, and `height`. In the given code, `getBoundingClientRect` is used to calculate the position of the `.my-desc` element and determine if it is visible on the screen. */
        .getBoundingClientRect(); // position de l'élément par rapport à la fenêtre
      setIsVisible(rect.top < window.innerHeight / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);

    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);
  // End Hook

  return (
    // Use the Layout component to wrap the page content
    <Layout>
      <div className="page-content">
        <h1>{titleKey}</h1>
        <p className={`my-desc typewriter ${isVisible ? "visible" : ""}`}>
          {subtitleKey}
        </p>
        {/* Skills section */}
        <Skills />
      </div>
      {/* Section des exemples de projets */}
      <CardsProjects />
    </Layout>
  );
};

export default Home;

//  // Hook to display typewriter effect
//  const [text, setText] = useState("");
//  const [isVisible, setIsVisible] = useState(false);

//  useEffect(() => {
//    let i = 0;
//    const timer = setInterval(() => {
//      if (i < subtitleKey.length) {
//        setText((prevText) => prevText + subtitleKey.charAt(i));
//        i++;
//      } else {
//        clearInterval(timer);
//      }
//    }, 80);

//    // Clean up the interval on component unmount
//    return () => clearInterval(timer);
//  }, []);
