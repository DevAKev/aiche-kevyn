// import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useTheme } from "../hooks/ThemeContext";
import Skills from "../components/Home/Skills";
import CardsProjects from "../components/Home/CardsProjects";
import Header from "../components/Header/Header";
import Typewriter from "../components/Animations/Typewriter";
import UfoEffect from "../components/Animations/UfoEffect";

const Home = () => {
  const { language } = useTheme();
  const titleKey = language === "en" ? "Welcome" : "Bienvenue";
  const subtitleKey =
    language === "en"
      ? "I'm AICHE Kévyn, but you can call me DevAKev"
      : "Je suis AICHE Kévyn, mais vous pouvez m'appeler DevAKev";

  return (
    <Layout>
      <Header />
      <div className="page-content">
        <h1>{titleKey}</h1>
        {/* Animation TypeWriter */}
        <Typewriter text={subtitleKey} />
        {/* Skills section */}
        <Skills />
      </div>
      {/* Section des exemples de projets */}
      <CardsProjects />
      {/* Animation UFO */}
      <UfoEffect />
    </Layout>
  );
};

export default Home;
