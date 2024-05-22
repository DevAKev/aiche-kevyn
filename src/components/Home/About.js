import { useTheme } from "../../hooks/ThemeContext";
import DevImg from "../../assets/images/about/developer_img.png";

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
            "My passion for development began in 2016. I discovered the unlimited potential of computer programming at that time and immediately fell in love with this profession.",
          paragraph2:
            "I thus decided to radically change my life and devote myself to this passion. I started practicing alongside jobs in other fields, which required a radical change and extreme concentration. This allowed me to gain valuable experience on various projects. From then on, I have done everything to learn and succeed in this path.",
          paragraph3:
            "In January 2023, I decided to take the plunge and become a computer developer by passing the Bac+2 diploma of 'Full Stack' Web and Web mobile Developer, which I obtained in February 2024. After obtaining this diploma, my trainer offered me the superb opportunity of a several months remote internship to help him develop an application in the training sector intended for various professions accompanied by personalized AI prompts. I worked closely with the UX/UI design manager to realize the Front-end, while working in tandem with my former trainer on the Back-end.",
          paragraph4:
            "This rewarding internship allowed me to better understand customer expectations and respond precisely to needs according to the field of activity. It also allowed me to have a real projection of what my life would be like in this profession, which confirmed my decision to pursue a career as a developer.",
          paragraph5:
            "I am now ready to take on new challenges within an innovative company that will trust me to develop their ideas. My goal is to reach a wide range of fields of activity, to discover new horizons and to conquer the world !",
        }
      : {
          // French text
          paragraph1:
            "Ma passion pour le développement a commencé en 2016. J'ai découvert à cette époque le potentiel illimité de la programmation informatique et je suis immédiatement tombé amoureux de ce métier.",
          paragraph2:
            "J’ai ainsi décidé de changer radicalement de vie et de me consacrer à cette passion. J’ai commencé à pratiquer en parallèle d'emplois dans d'autres domaines, ce qui m'a demandé un changement radical et une concentration extrême. Cela m’a permis d’acquérir une expérience précieuse sur divers projets. Dès lors, j'ai mis tout en oeuvre pour apprendre et réussir dans cette voie.",
          paragraph3:
            "En Janvier 2023, j'ai décidé de franchir le pas et de devenir développeur informatique en passant le diplôme Bac+2 de Developpeur Web et Web mobile 'Full Stack', que j'ai obtenu en Février 2024. Après l'obtention de ce diplôme, mon formateur m'a offert la superbe opportunité d'un stage de plusieurs mois en Full remote pour l'aider à développer une application dans le secteur de la formation destinée à divers métiers accompagnée de prompts IA personnalisés. J’ai travaillé en étroite collaboration avec la responsable de l’UX/UI design pour réaliser le Front-end, tout en travaillant en binôme avec mon ancien formateur sur la partie Back-end.",
          paragraph4:
            "Ce stage enrichissant m’a permis de mieux comprendre les attentes des clients et de répondre précisément aux besoins en fonction du domaine d’activité. Cela m'a également permis d'avoir une vraie projection de ce que serait ma vie dans ce métier, ce qui m'a conforté dans ma décision de poursuivre une carrière en tant que développeur.",
          paragraph5:
            "Je suis maintenant prêt à relever de nouveaux défis au sein d’une entreprise innovante qui saura me faire confiance pour développer leurs idées. Mon objectif est de toucher un large éventail de domaines d’activités, de découvrir de nouveaux horizons et de conquérir le monde !",
        };

  return (
    <div id="about" className="page-content">
      <h1 className="about-title">{aboutTitle}</h1>
      <h2 className="about-subtitle">{aboutSubtitle}</h2>
      <img src={DevImg} alt="Developer" className="about-img" />
      <p className="about-text">{aboutText.paragraph1}</p>
      <p className="about-text">{aboutText.paragraph2}</p>
      <p className="about-text">{aboutText.paragraph3}</p>
      <p className="about-text">{aboutText.paragraph4}</p>
      <p className="about-text">{aboutText.paragraph5}</p>
    </div>
  );
};

export default About;
