import Layout from "../components/Layout";
import { useTheme } from "../hooks/ThemeContext";
import Skills from "../components/Home/Skills";
import CardsProjects from "../components/Home/CardsProjects";
import Typewriter from "../components/Animations/Typewriter";
// import UfoEffect from "../components/Animations/UfoEffect";

const Home = () => {
  const { language } = useTheme();
  const titleKey = language === "en" ? "Welcome" : "Bienvenue";
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
  const languageSound =
    language === "en" ? "/keyboard_sound_en.m4a" : "/keyboard_sound_fr.m4a";

  return (
    <Layout>
      <div className="page-content">
        <h1>{titleKey}</h1>
        {/* Animation TypeWriter */}
        <Typewriter text={DescText} sound={languageSound} />
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
