import Layout from "@components/Layout";
import { useTheme } from "@hooks/ThemeContext";
import Skills from "@components/Home/Skills";
import Typewriter from "@components/Animations/Typewriter";
import EnTypewriter from "@assets/sounds/keyboard_sound_en.m4a";
import FrTypewriter from "@assets/sounds/keyboard_sound_fr.m4a";
import About from "@components/Home/About";
import Projects from "@components/Home/Projects";
// import UfoEffect from "@components/Animations/UfoEffect";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Services from "@components/Home/Services";
import Footer from "@components/Footer/Footer";
import Contact from "@components/Home/Contact";

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
      <main id="home" className="page-content">
        <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__fadeInLeftBig"
            animateOnce={true}
          >
            <h1 className="home-title">{titleKey}</h1>
          </ScrollAnimation>
        </div>
        <div className="scroll-animation-container">
          <ScrollAnimation animateIn="animate__bounceInUp" animateOnce={true}>
            {/* Animation TypeWriter */}
            <Typewriter text={DescText} sound={languageSound} />
          </ScrollAnimation>
        </div>

        <div className="scroll-animation-container">
          <ScrollAnimation animateIn="animate__heartBeat" animateOnce={true}>
            {/* Projets section */}
            <div className="section-wrap">
              <Projects />
            </div>
          </ScrollAnimation>
        </div>
        <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__bounceInUp"
            animateOnce={true}
            delay={600}
          >
            {/* Services section */}
            <Services />
          </ScrollAnimation>
        </div>
        <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__fadeInLeftBig"
            animateOnce={true}
          >
            {/* Skills section */}
            <Skills />
          </ScrollAnimation>
        </div>

        <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__fadeInRightBig"
            animateOnce={true}
            delay={300}
          >
            {/* About section */}
            <About />
          </ScrollAnimation>
        </div>
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
