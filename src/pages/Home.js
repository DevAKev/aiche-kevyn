import { useTheme } from "@hooks/ThemeContext";
import Layout from "@components/Layout/Layout";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import EnTypewriter from "@assets/sounds/keyboard_sound_en.m4a";
import FrTypewriter from "@assets/sounds/keyboard_sound_fr.m4a";
import Typewriter from "@components/Animations/Typewriter";
import Projects from "@components/Home/Projects";
import Services from "@components/Home/Services";
import Skills from "@components/Home/Skills";
// import Articles from "@components/Home/Articles";
import About from "@components/Home/About";
import Contact from "@components/Home/Contact";
import Footer from "@components/Footer/Footer";

const Home = () => {
  const { language } = useTheme();
  const titleKey = language === "en" ? "Welcome" : "Bienvenue";
  const descText =
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
        {/* Home title */}
        <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__fadeInLeftBig"
            animateOnce={true}
          >
            <h1 className="home-title">{titleKey}</h1>
          </ScrollAnimation>
        </div>

        {/* Animation TypeWriter */}
        <div className="scroll-animation-container">
          <ScrollAnimation animateIn="animate__bounceInUp" animateOnce={true}>
            <Typewriter text={descText} sound={languageSound} />
          </ScrollAnimation>
        </div>

        {/* Projets section */}
        <div className="scroll-animation-container">
          <ScrollAnimation animateIn="animate__heartBeat" animateOnce={true}>
            <div className="section-wrap">
              <Projects />
            </div>
          </ScrollAnimation>
        </div>

        {/* Services section */}
        <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__bounceInUp"
            animateOnce={true}
            delay={600}
          >
            <Services />
          </ScrollAnimation>
        </div>

        {/* Skills section */}
        <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__fadeInLeftBig"
            animateOnce={true}
          >
            <Skills />
          </ScrollAnimation>
        </div>

        {/* Articles section */}
        {/* <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__fadeInRightBig"
            animateOnce={true}
          >
            <Articles />
          </ScrollAnimation>
        </div> */}

        {/* About section */}
        <div className="scroll-animation-container">
          <ScrollAnimation
            animateIn="animate__fadeInLeftBig"
            animateOnce={true}
            delay={300}
          >
            <About />
          </ScrollAnimation>
        </div>

        {/* Contact section */}
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
