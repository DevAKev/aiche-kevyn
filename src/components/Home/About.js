import { useTheme } from "../../hooks/ThemeContext";
import DevImg from "../../assets/images/about/dev-web.png";

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
            "My passion for development began in 2016. I discovered the unlimited potential of computer programming at that time and immediately fell in love !",
          paragraph2:
            "I thus decided to radically change my life and devote myself to this passion. I started practicing alongside jobs in other fields, which required a radical change and extreme concentration.",
          paragraph3:
            "This allowed me to gain valuable experience on various development projects. From then on, I have done everything to learn and succeed in this path.",
          paragraph4:
            "In January 2023, I decided to take the plunge and make it my career by completing the Bac+2 Full Stack Web and Mobile Web Developer diploma, which I obtained in February 2024.",
          paragraph5:
            "After this success, the school's React and Javascript trainer offered me the superb opportunity to carry out an internship of several months in Full remote at Andragogy to help him develop an application in the sector of personalized training accompanied by artificial intelligence intended for companies and schools.",
          paragraph6:
            "I worked closely with the UX/UI design team to create the Front-end, while working in pairs with my former trainer on the Back-end part.",
          paragraph7:
            "This rewarding internship allowed me to better understand customer expectations and respond precisely to needs based on demand. It also allowed me to have a real projection of what my life would be like in this profession, which confirmed my decision to pursue a career as a developer.",
          paragraph8:
            "I am now ready to take on new challenges within an innovative company that will trust me to develop their ideas. My goal is to reach a wide range of fields of activity, to discover new horizons and to conquer the world !",
        }
      : {
          // French text
          paragraph1:
            "Ma passion pour le développement a commencé en 2016. J'ai découvert à cette époque le potentiel illimité de la programmation informatique et je suis immédiatement tombé amoureux !",
          paragraph2:
            "J’ai ainsi décidé de changer radicalement de vie et de me consacrer à cette passion. J’ai commencé à pratiquer en parallèle d'emplois dans d'autres domaines, ce qui m'a demandé un changement radical et une grande concentration.",
          paragraph3:
            "Cela m’a permis d’acquérir une expérience précieuse sur divers projets de développement. Dès lors, j'ai mis tout en oeuvre pour apprendre et réussir dans cette voie.",
          paragraph4:
            "En Janvier 2023, j'ai décidé de me lancer et d'en faire mon métier en passant le diplôme Bac+2 de Developpeur Web et Web mobile 'Full Stack', que j'ai obtenu en Février 2024.",
          paragraph5:
            "Après ce succès, le formateur React et Javascript de l'école m'a offert la superbe opportunité de réaliser un stage de plusieurs mois en Full remote chez Andragogy pour l'aider à développer une application dans le secteur de la formation personnalisée accompagnée par l'intelligence artificielle destinée aux entreprises et aux écoles.",
          paragraph6:
            "J’ai travaillé en étroite collaboration avec l'équipe de l’UX/UI design pour réaliser le Front-end, tout en travaillant en binôme avec mon ancien formateur sur la partie Back-end.",
          paragraph7:
            "Ce stage enrichissant m’a permis de mieux comprendre les attentes des clients et de répondre précisément aux besoins en fonction de la demande. Cela m'a également permis d'avoir une vraie projection de ce que serait ma vie dans ce métier, ce qui m'a conforté dans ma décision de poursuivre une carrière en tant que développeur.",
          paragraph8:
            "Je suis maintenant prêt à relever de nouveaux défis au sein d’une entreprise innovante qui saura me faire confiance pour développer leurs idées. Mon objectif est de toucher un large éventail de domaines d’activités, de découvrir de nouveaux horizons et de conquérir le monde !",
        };

  return (
    <div id="about" className="page-content">
      <h1 className="about-title">{aboutTitle}</h1>
      <h2 className="about-subtitle">{aboutSubtitle}</h2>
      <div className="about-container">
        <img src={DevImg} alt="Developer" className="about-img" />
        <div className="about-text-container">
          <p className="about-text">{aboutText.paragraph1}</p>
          <p className="about-text">{aboutText.paragraph2}</p>
          <p className="about-text">{aboutText.paragraph3}</p>
          <p className="about-text">{aboutText.paragraph4}</p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text-container2">
          <p className="about-text2">{aboutText.paragraph5}</p>
          <p className="about-text2">{aboutText.paragraph6}</p>
          <p className="about-text2">{aboutText.paragraph7}</p>
          <p className="about-text2">{aboutText.paragraph8}</p>
        </div>
        <img src={DevImg} alt="Developer" className="about-img" />
      </div>
    </div>
  );
};

export default About;

// ###### TODO : AJOUTER LIEN VERS PROJETS & ANDRAGOGY / AJOUTER PHOTO PERSO / AJOUTER LA POSSIBILITE DE CONSULTER LE DIPLÔME ET LE CV ######
