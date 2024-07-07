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
            "My passion for development began in 2018. I discovered the unlimited potential of computer programming at that time and immediately fell in love !",
          paragraph2:
            "I decided to radically change my life. I started practicing alongside jobs in other fields, which required a lot of concentration.",
          paragraph3:
            "This allowed me to gain valuable experience on various development projects using mainly PHP and Javascript languages.",
          paragraph4:
            "In January 2023, I wanted to get started and make it my career by completing the Bac+2 diploma in 'Full Stack' Web and Mobile Web Developer, which I obtained in February 2024.",
          paragraph5:
            "After this success, I had the opportunity to complete an internship of several months in Full remote at Andragogy to help them develop their React application in the training sector intended for companies and schools.",
          paragraph6:
            "This enriching internship allowed me to have a real insight into this profession, which reinforced my decision to pursue a career as a developer.",
          paragraph7:
            "I am now ready to take on new challenges within an innovative company that will trust me to develop its ideas. My goal is to discover new horizons and conquer the world !",
        }
      : {
          // French text
          paragraph1:
            "Ma passion pour le développement a commencé en 2018. J'ai découvert à cette époque le potentiel illimité de la programmation informatique et je suis immédiatement tombé amoureux !",
          paragraph2:
            "J’ai décidé de changer radicalement de vie. J’ai commencé à pratiquer en parallèle d'emplois dans d'autres domaines, ce qui m'a demandé une grande concentration.",
          paragraph3:
            "Cela m’a permis d’acquérir une expérience précieuse sur divers projets de développement en utilisant majoritairement les langages PHP et Javascript.",
          paragraph4:
            "En Janvier 2023, j'ai voulu me lancer et en faire mon métier en passant le diplôme Bac+2 de Developpeur Web et Web mobile 'Full Stack', que j'ai obtenu en Février 2024.",
          paragraph5:
            "Après ce succès, j'ai eu l'opportunité de réaliser un stage de plusieurs mois en Full remote chez Andragogy pour l'aider à développer son application React dans le secteur de la formation destinée aux entreprises et aux écoles.",
          paragraph6:
            "Ce stage enrichissant m’a permis d'avoir une vraie projection sur ce métier, ce qui m'a conforté dans ma décision de poursuivre une carrière en tant que développeur.",
          paragraph7:
            "Je suis maintenant prêt à relever de nouveaux défis au sein d’une entreprise innovante qui me fera confiance pour développer ses idées. Mon objectif est de découvrir de nouveaux horizons et conquérir le monde !",
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
          <p className="about-text">{aboutText.paragraph4}</p>
        </div>
      </div>
      <div className="about-img-container">
        <img src={UfoImg} alt="About Ufo" className="about-img2 mobile-only" />
      </div>
      <div className="about-container">
        <div className="about-text-container2">
          <p className="about-text2">{aboutText.paragraph5}</p>
          <p className="about-text2">{aboutText.paragraph6}</p>
          <p className="about-text2">{aboutText.paragraph7}</p>
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
