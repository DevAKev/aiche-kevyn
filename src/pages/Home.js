// import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Layout from "../components/Layout";
import { useTheme } from "../hooks/ThemeContext";
import Skills from "../components/Home/Skills";
import CardsProjects from "../components/Home/CardsProjects";
// import UfoEffect from "../components/Animations/UfoEffect";

const Home = () => {
  // Language for the title
  const { language } = useTheme();
  const titleKey = language === "en" ? "Welcome" : "Bienvenue";
  // Text for the Typewriter animation
  const DescText =
    language === "en"
      ? [
          "I'm <strong>AICHE Kévyn</strong>,",
          "but you can call me",
          "<strong>DevAKev</strong>",
        ]
      : [
          "Je suis <strong>AICHE Kévyn</strong>,",
          "mais vous pouvez m'appeler",
          "<strong>DevAKev</strong>",
        ];
  return (
    <Layout>
      <div className="page-content">
        <h1>{titleKey}</h1>
        {/* Animation TypeWriter */}
        <ReactTyped
          className="typewriter-text"
          strings={DescText}
          typeSpeed={130} // Vitesse de frappe
          backSpeed={20} // Vitesse de suppression
          cursorChar="|" // Caractère du curseur
          smartBackspace // Suppression intelligente
          loop // Boucle
        />
        {/* Skills section */}
        <Skills />
      </div>
      {/* Animation UFO */}
      {/* <UfoEffect /> */}
      {/* Section des exemples de projets */}
      <CardsProjects />
    </Layout>
  );
};

export default Home;
