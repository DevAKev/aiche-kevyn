import { useTheme } from "@hooks/ThemeContext";
import DevImg from "@assets/images/about/lbc-img-2.jpeg";
import UfoImg from "@assets/images/about/about-ufo.webp";
import { getAboutData } from "@data/aboutData";

// Component to display the about page
const About = () => {
  const { language } = useTheme();
  const about = getAboutData(language);

  return (
    <div id="about" className="page-content">
      <h1 className="about-title">{about.title}</h1>
      <div className="about-container">
        <div className="about-img-container">
          <img src={DevImg} alt="Developer" className="about-img" />
        </div>
        <div className="about-text-container">
          <h2 className="about-subtitle">{about.subtitle}</h2>
          <p className="about-text">{about.paragraphs[0]}</p>
          <p className="about-text">{about.paragraphs[1]}</p>
          <p className="about-text">{about.paragraphs[2]}</p>
        </div>
      </div>
      <div className="about-img-container">
        <img src={UfoImg} alt="About Ufo" className="about-img2 mobile-only" />
      </div>
      <div className="about-container">
        <div className="about-text-container2">
          <p className="about-text2">{about.paragraphs[3]}</p>
          <p className="about-text2">{about.paragraphs[4]}</p>
          <p className="about-text2">{about.paragraphs[5]}</p>
        </div>
        <div className="about-img-container">
          <img
            src={UfoImg}
            alt="About Ufo"
            className="about-img2 desktop-only"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
