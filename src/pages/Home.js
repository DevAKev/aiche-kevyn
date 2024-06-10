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
import Services from "../components/Home/Services";
import Footer from "../components/Footer/Footer";

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
      <div className="background-cover"></div>
      <div id="home" className="page-content">
        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce={true}>
          <h1 className="home-title">{titleKey}</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__bounceInUp" animateOnce={true}>
          {/* Animation TypeWriter */}
          <Typewriter text={DescText} sound={languageSound} />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__bounceInUp"
          animateOnce={true}
          delay={1000}
        >
          {/* Services section */}
          <Services />
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__zoomInDown" animateOnce={true}>
          {/* Skills section */}
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__zoomInUp"
          animateOnce={true}
          delay={1000}
        >
          {/* Projets section */}
          <div className="section-wrap">
            <Projects />
          </div>
        </ScrollAnimation>
        {/* Animation UFO */}
        {/* <UfoEffect /> */}
        <ScrollAnimation
          animateIn="animate__flipInY"
          animateOnce={true}
          delay={1000}
        >
          {/* About section */}
          <About />
        </ScrollAnimation>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
