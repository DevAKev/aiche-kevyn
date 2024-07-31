import { useTheme } from "@hooks/ThemeContext";
import DevImg from "@assets/images/about/about-perso-picture.webp";
import UfoImg from "@assets/images/about/about-ufo.webp";

// Component to display the about page
const About = () => {
  const { language } = useTheme();

  const aboutTitle = language === "en" ? "About" : "À propos";
  const aboutSubtitle =
    language === "en"
      ? "I'm a passionate developer !"
      : "Je suis un développeur passionné !";

  const aboutText =
    language === "en"
      ? {
          // English text
          paragraph1:
            "My passion for development began in 2018. I discovered the unlimited potential of computer programming and immediately fell in love !",
          paragraph2:
            "I decided to radically change my life. I started practicing alongside jobs in other fields, which required a lot of concentration.",
          paragraph3:
            "End of 2022, I wanted to get started for make it my career by completing the Bac+2 diploma in 'Full Stack' Web and Mobile Web Developer, which I obtained in February 2024.",
          paragraph4:
            "After this success, I had the opportunity to do an internship of several months to collaborate on the development of an application intended for the training sector for companies and schools.",
          paragraph5:
            "This was my first professional experience in this field, which reinforced my decision to pursue a career as a developer.",
          paragraph6:
            "I am now ready to take on new challenges within an innovative company that will trust me to develop its ideas. My goal is to discover new horizons and to conquer the world !",
        }
      : {
          // French text
          paragraph1:
            "Ma passion pour le développement a commencé en 2018. J'ai découvert le potentiel illimité de la programmation informatique et je suis immédiatement tombé amoureux !",
          paragraph2:
            "J’ai décidé de changer radicalement de vie. J’ai commencé à pratiquer en parallèle d'emplois dans d'autres domaines, ce qui m'a demandé une grande concentration.",
          paragraph3:
            "Fin 2022, j'ai voulu me lancer pour en faire mon métier en passant le diplôme Bac+2 de Developpeur Web et Web mobile 'Full Stack', que j'ai obtenu en Février 2024.",
          paragraph4:
            "Après ce succès, j'ai eu l'opportunité de réaliser un stage de plusieurs mois pour collaborer au développement d'une application destinée au secteur de la formation pour les entreprises et les écoles.",
          paragraph5:
            "Ce fut ma première plongée en situation professionnelle dans ce métier, ce qui m'a conforté dans ma décision de poursuivre une carrière en tant que développeur.",
          paragraph6:
            "Je suis maintenant prêt à relever de nouveaux défis au sein d’une entreprise innovante qui me fera confiance pour développer ses idées. Mon objectif est de découvrir de nouveaux horizons et de conquérir le monde !",
        };

  return (
    <div id="about" className="page-content">
      <h1 className="about-title">{aboutTitle}</h1>

      <div className="about-container">
        <div className="about-img-container">
          <img src={DevImg} alt="Developer" className="about-img" />
        </div>
        <div className="about-text-container">
          <h2 className="about-subtitle">{aboutSubtitle}</h2>
          <p className="about-text">{aboutText.paragraph1}</p>
          <p className="about-text">{aboutText.paragraph2}</p>
          <p className="about-text">{aboutText.paragraph3}</p>
        </div>
      </div>
      <div className="about-img-container">
        <img src={UfoImg} alt="About Ufo" className="about-img2 mobile-only" />
      </div>
      <div className="about-container">
        <div className="about-text-container2">
          <p className="about-text2">{aboutText.paragraph4}</p>
          <p className="about-text2">{aboutText.paragraph5}</p>
          <p className="about-text2">{aboutText.paragraph6}</p>
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

// ###### TODO : AJOUTER PHOTO PERSO / AJOUTER LA POSSIBILITE DE CONSULTER LE DIPLÔME ET LE CV ######
