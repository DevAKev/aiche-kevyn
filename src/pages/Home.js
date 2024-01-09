import React from "react";
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

  return (
    // Use the Layout component to wrap the page content
    <Layout>
      <div className="page-content">
        <h1>{titleKey}</h1>
        <p className="my-desc">{subtitleKey}</p>

        {/* Skills section */}
        <Skills />
      </div>
      {/* Section des exemples de projets */}
      <CardsProjects />
    </Layout>
  );
};

export default Home;
