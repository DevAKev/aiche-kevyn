import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useTheme } from "../hooks/ThemeContext";
import Skills from "../components/Skills";
import CardsProjects from "../components/CardsProjects";
import Header from "../components/BurgerMenu";

const Home = () => {
  const { language } = useTheme();
  const titleKey = language === "en" ? "Welcome" : "Bienvenue";
  const subtitleKey =
    language === "en"
      ? "I'm AICHE Kévyn, but you can call me DevAKev"
      : "Je suis AICHE Kévyn, mais vous pouvez m'appeler DevAKev";

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
    <Layout>
      <Header />
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
      <img
        src="./ufo.png"
        alt="Flying Saucer"
        className={`flying-saucer ${isVisible ? "show-saucer" : ""}`}
      />
    </Layout>
  );
};

export default Home;
