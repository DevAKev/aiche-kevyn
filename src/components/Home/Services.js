import { useTheme } from "../../hooks/ThemeContext";
import ServiceCard from "../../components/Services/ServiceCard";
import { ReactComponent as WebIcon } from "../../assets/images/icons/website.svg";
import MobileIcon from "../../assets/images/icons/mobiles.png";
import GamesIcon from "../../assets/images/icons/games.png";
import GraphicDesignIcon from "../../assets/images/icons/design.png";

import SEOIcon from "../../assets/images/icons/seo.png";
import ResponsiveIcon from "../../assets/images/icons/responsive.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Services = () => {
  const { language } = useTheme();
  const titleKey = language === "en" ? "My Services" : "Mes Services";

  return (
    <div id="services" className="page-content">
      <ScrollAnimation
        animateIn="animate__bounceInUp"
        animateOnce={true}
        delay={3500}
      >
        <h1 className="services-title">{titleKey}</h1>
        <div className="services">
          {/* Web development card */}
          <ServiceCard
            title={language === "en" ? "Web Development" : "Développement Web"}
            description={
              language === "en"
                ? "I design and develop websites and web applications that are responsive, user-friendly, and visually appealing."
                : "Je conçois et développe des sites web et des applications web qui sont réactifs, conviviaux et visuellement attrayants."
            }
            icon={<WebIcon />}
          />

          {/* Mobile development card */}
          <ServiceCard
            title={
              language === "en" ? "Mobile Development" : "Développement Mobile"
            }
            description={
              language === "en"
                ? "I design and develop mobile applications that are user-friendly, visually appealing, and easy to use."
                : "Je conçois et développe des applications mobiles qui sont conviviales, visuellement attrayantes et faciles à utiliser."
            }
            icon={
              <img className="mobile-icon" src={MobileIcon} alt="Mobile Icon" />
            }
          />

          {/* Games development card */}
          <ServiceCard
            title={
              language === "en" ? "Games Development" : "Développement de Jeux"
            }
            description={
              language === "en"
                ? "I design and develop games that are visually appealing, user-friendly, and fun to play."
                : "Je conçois et développe des jeux qui sont visuellement attrayants, conviviaux et amusants à jouer."
            }
            icon={
              <img className="games-icon" src={GamesIcon} alt="Games Icon" />
            }
          />

          {/* Graphic & design card */}
          <ServiceCard
            title={language === "en" ? "Graphic Design" : "Design Graphique"}
            description={
              language === "en"
                ? "I design visually appealing and user-friendly graphics and web designs."
                : "Je conçois des graphiques et des web designs visuellement attrayants et conviviaux."
            }
            icon={
              <img
                className="design-icon"
                src={GraphicDesignIcon}
                alt="Graphic & design Icon"
              />
            }
          />

          {/* SEO card */}
          <ServiceCard
            title={
              language === "en"
                ? "Optimization of natural referencing (SEO)"
                : "Optimisation du référencement naturel (SEO)"
            }
            description={
              language === "en"
                ? "I optimize websites for natural search engine ranking."
                : "J'optimise les sites web pour le classement naturel dans les moteurs de recherche."
            }
            icon={<img className="seo-icon" src={SEOIcon} alt="SEO Icon" />}
          />

          {/* Responsive design card */}
          <ServiceCard
            title={
              language === "en"
                ? "Adapting to Responsive Design"
                : "Adaptation au Design Réactif"
            }
            description={
              language === "en"
                ? "I adapt websites for responsive design."
                : "J'adapte les sites web pour le design réactif."
            }
            icon={
              <img
                className="responsive-icon"
                src={ResponsiveIcon}
                alt="Responsive design Icon"
              />
            }
          />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Services;
