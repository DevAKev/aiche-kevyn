import Layout from "../components/Layout";
import { useTheme } from "../hooks/ThemeContext";
import Skills from "../components/Home/Skills";
import Typewriter from "../components/Animations/Typewriter";
import EnTypewriter from "../assets/sounds/keyboard_sound_en.m4a";
import FrTypewriter from "../assets/sounds/keyboard_sound_fr.m4a";
import About from "../components/Home/About";
import Projects from "../components/Home/Projects";
// import UfoEffect from "../components/Animations/UfoEffect";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

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
  const languageSound = language === "en" ? EnTypewriter : FrTypewriter;

  return (
    <Layout>
      <div id="home" className="page-content">
        <ScrollAnimation
          animateIn="animate__lightSpeedInLeft"
          animateOnce={true}
        >
          <h1>{titleKey}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__bounceInUp" animateOnce={true}>
          {/* Animation TypeWriter */}
          <Typewriter text={DescText} sound={languageSound} />
        </ScrollAnimation>

        {/* Skills section */}
        <Skills />
        {/* Projets section */}
        <Projects />
        {/* Animation UFO */}
        {/* <UfoEffect /> */}
        {/* About section */}
        <About />
      </div>
    </Layout>
  );
};

export default Home;
