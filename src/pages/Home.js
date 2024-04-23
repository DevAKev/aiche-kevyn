// import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Layout from "../components/Layout";
import { useTheme } from "../hooks/ThemeContext";
import Skills from "../components/Home/Skills";
import CardsProjects from "../components/Home/CardsProjects";
import UfoEffect from "../components/Animations/UfoEffect";

const Home = () => {
  const { language } = useTheme();
  const titleKey = language === "en" ? "Welcome" : "Bienvenue";
  const DescText =
    language === "en"
      ? ["I'm AICHE Kévyn,", "but you can call me", "DevAKev"]
      : ["Je suis AICHE Kévyn,", "mais vous pouvez m'appeler", "DevAKev"];
  return (
    <Layout>
      <div className="page-content">
        <h1>{titleKey}</h1>
        {/* Animation TypeWriter */}
        <ReactTyped
          className="typewriter-text"
          strings={DescText}
          typeSpeed={130}
        />
        {/* Skills section */}
        <Skills />
      </div>
      {/* Animation UFO */}
      <UfoEffect />
      {/* Section des exemples de projets */}
      <CardsProjects />
    </Layout>
  );
};

export default Home;
