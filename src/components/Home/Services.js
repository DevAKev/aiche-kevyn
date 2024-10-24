import { useTheme } from "@hooks/ThemeContext";
import ServiceCard from "@components/Services/ServiceCard";
import { ReactComponent as WebIcon } from "@assets/images/icons/website.svg";
import MobileIcon from "@assets/images/icons/mobiles.png";
// import GamesIcon from "@assets/images/icons/games.png";
import GraphicDesignIcon from "@assets/images/icons/design.png";
import SEOIcon from "@assets/images/icons/seo.png";
import RocketIcon from "@assets/images/icons/services-rocket-icon.webp";
import UfoIcon from "@assets/images/icons/services-ufo-icon.webp";
import DesignIcon from "@assets/images/icons/service-design-icon.webp";
import PlanetIcon from "@assets/images/icons/services-planet-icon.webp";

const Services = () => {
  const { language } = useTheme();
  const servicesTitle = language === "en" ? "My Services" : "Mes Services";
  const servicesEmail = "devakev.contact@gmail.com";

  return (
    <div id="services" className="page-content">
      <h1 className="services-title">{servicesTitle}</h1>
      <div className="services">
        {/* Web development card */}
        <ServiceCard
          title={language === "en" ? "Web Development" : "Développement Web"}
          description={
            language === "en" ? (
              <div>
                <p>
                  Are you looking for a web developer to propel your business
                  into the online world ?
                </p>
                <p>
                  I create customized websites that reflect your identity.
                  Invest in your growth and increase your online visibility to
                  attract new customers to your digital storefront.
                </p>
                <p>Ready to take off towards online success ?</p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                      "Web Development Project"
                    )}&body=${encodeURIComponent(
                      "Hello, I am interested in your web development services. Can we discuss this further?"
                    )}`}
                  >
                    Contact me now
                  </a>
                </p>
                <img
                  className="services-icons"
                  src={RocketIcon}
                  alt="Rocket Icon"
                />
              </div>
            ) : (
              <div>
                <p>
                  Vous cherchez un développeur web pour propulser votre
                  entreprise dans l'univers d'internet ?
                </p>
                <p>
                  Je conçois des sites web sur mesure et qui vous ressemblent.
                  Investissez dans votre croissance et augmentez votre
                  visibilité en ligne pour attirer de nouveaux clients vers
                  votre vitrine digitale.
                </p>
                <p>Prêt à décoller vers le succès en ligne ?</p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                      "Projet de développement web"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, je suis intéressé par vos services de développement web. Pouvons-nous en discuter davantage ?"
                    )}`}
                  >
                    Contactez moi dès maintenant
                  </a>
                </p>
                <img
                  className="services-icons"
                  src={RocketIcon}
                  alt="Rocket Icon"
                />
              </div>
            )
          }
          icon={<WebIcon />}
        />

        {/* Mobile development card */}
        <ServiceCard
          title={
            language === "en"
              ? "Mobile Development & Responsive Design"
              : "Développement Mobile & Design Réactif"
          }
          description={
            language === "en" ? (
              <div>
                <p>Do you want to reach your targets on all mobile devices ?</p>
                <p>
                  Unlock the full potential of your business with customized
                  mobile apps, user-friendly, visually appealing, and optimized
                  to rank well in app store searches.
                </p>
                <p>
                  Together,{" "}
                  <a
                    className="contact-link"
                    href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                      "Mobile-first Web Development"
                    )}&body=${encodeURIComponent(
                      "Hello Kévyn, I would like to propose a mobile web development project. What are the steps to follow ?"
                    )}`}
                  >
                    let's turn your vision into reality !
                  </a>
                  Let yourself be guided through the vastness of the web and
                  broaden your digital perspectives.
                </p>
                <img className="services-icons" src={UfoIcon} alt="Ufo Icon" />
              </div>
            ) : (
              <div>
                <p>
                  Vous souhaitez atteindre vos cibles sur tous les appareils
                  mobiles ?
                </p>
                <p>
                  Libérez tout le potentiel de votre entreprise avec des
                  applications mobiles personnalisées, conviviales, visuellement
                  attrayantes et optimisées pour bien se classer dans les
                  recherches des magasins d’applications.
                </p>
                <p>
                  Ensemble,{" "}
                  <a
                    className="contact-link"
                    href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                      "Développement Web Mobile First"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, j'aimerais vous proposer un projet de développement web mobile. Quelles sont les étapes à suivre ?"
                    )}`}
                  >
                    transformons votre vision en réalité !
                  </a>
                  Laissez vous guider à travers l'immensité du web et élargissez
                  vos perspectives numériques.
                </p>
                <img className="services-icons" src={UfoIcon} alt="Ufo Icon" />
              </div>
            )
          }
          icon={
            <img
              className="mobile-icon"
              src={MobileIcon}
              alt="Icône de développement mobile"
            />
          }
        />

        {/* Games development card */}
        {/* <ServiceCard
            title={
              language === "en"
                ? "Mobile Games Development"
                : "Développement de Jeux Mobiles"
            }
            description={
              language === "en" ? (
                <div>
                  <p>
                    Immerse your audience in the world of mobile gaming with
                    custom game development. Specializing in JavaScript, I
                    design and develop mobile games full of fun and excitement.
                  </p>
                  <p>
                    Experience the thrill of engaging gameplay and impressive
                    graphics, right on your mobile device. Whether you're
                    looking to engage your audience with a casual game or
                    captivate them with a more complex one, I am at your
                    disposal.
                  </p>
                  <p>
                    Let's turn your game idea into a mobile reality that will
                    keep players coming back again and again.
                  </p>
                  <p>
                    Contact me today to discuss your needs in mobile game
                    development and embark together on this adventure ! 🤖
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Plongez votre public dans le monde du jeu mobile avec le
                    développement de jeux personnalisés. Spécialisé en
                    JavaScript, je conçois et développe des jeux mobiles bourrés
                    de fun et d'excitation.
                  </p>
                  <p>
                    Vivez le frisson d'un gameplay engageant et de graphismes
                    impressionnants, directement sur votre appareil mobile. Que
                    vous cherchiez à engager votre public avec un jeu
                    occasionnel ou à le captiver avec un jeu plus complexe, je
                    suis à votre disposition.
                  </p>
                  <p>
                    Transformons votre idée de jeu en une réalité mobile qui
                    incitera les joueurs à revenir encore et encore.
                  </p>
                  <p>
                    Contactez-moi dès aujourd'hui pour discuter de vos besoins
                    en développement de jeux mobiles et embarquons ensemble dans
                    cette aventure ! 🤖
                  </p>
                </div>
              )
            }
            icon={
              <img
                className="games-icon"
                src={GamesIcon}
                alt="Mobile game development icon"
              />
            }
          /> */}

        {/* Graphic & design card */}
        <ServiceCard
          title={language === "en" ? "Graphic Design" : "Design Graphique"}
          description={
            language === "en" ? (
              <div>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                      "Improving a company's visual identity"
                    )}&body=${encodeURIComponent(
                      "Hello Kévyn, I would like to discuss with you the possibilities of improving my company's visual identity. What are the information to provide ?"
                    )}`}
                  >
                    Are you lacking inspiration ?
                  </a>
                  Would you like support in creating unique visuals that will
                  allow you to promote your brand identity ?
                </p>
                <p>You are in a good place.</p>
                <p>
                  With a keen eye for detail and a creative mind, I offer a wide
                  range of services to help your business transform your ideas
                  into standout graphics !
                </p>
                <img
                  className="services-icons"
                  src={DesignIcon}
                  alt="Design Icon"
                />
              </div>
            ) : (
              <div>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                      "Amélioration de l'identité visuelle d'une entreprise"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, j'aimerais discuter avec vous des possibilités d'amélioration de l'identité visuelle de mon entreprise. Quels sont les éléments d'informations à fournir ?"
                    )}`}
                  >
                    En panne d'inspiration ?
                  </a>
                  Vous souhaitez un accompagnement dans la création de visuels
                  uniques qui vous permettront de promouvoir l'identité de votre
                  marque ?
                </p>
                <p>Vous êtes au bon endroit.</p>
                <p>
                  Avec un œil attentif aux détails et un esprit créatif, je
                  propose une large gamme de services pour aider votre
                  entreprise à transformer vos idées en graphisme hors du commun
                  !
                </p>
                <img
                  className="services-icons"
                  src={DesignIcon}
                  alt="Design Icon"
                />
              </div>
            )
          }
          icon={
            <img
              className="design-icon"
              src={GraphicDesignIcon}
              alt="Graphic design icon"
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
            language === "en" ? (
              <div>
                <p>
                  Shine in the dark of the internet with an effective SEO
                  optimization strategy.
                </p>
                <p>
                  With good SEO practices, your website can rank higher in
                  search results and convert more visitors into customers.
                </p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                      "Optimization of natural referencing (SEO)"
                    )}&body=${encodeURIComponent(
                      "Hello Kévyn, I am interested in your services regarding the improvement of natural referencing. What are your availabilities to organize a meeting ?"
                    )}`}
                  >
                    Let's discuss your SEO needs
                  </a>
                  and let's work together to help your business get the
                  visibility it deserves !
                </p>
                <img
                  className="services-icons"
                  src={PlanetIcon}
                  alt="Planet Icon"
                />
              </div>
            ) : (
              <div>
                <p>
                  Brillez dans l'obscurité du net grâce à une stratégie
                  d’optimisation du référencement naturel efficace.
                </p>
                <p>
                  Avec les bonnes pratiques SEO, votre site web peut être mis en
                  avant dans les résultats de recherche et convertir plus de
                  visiteurs en clients.
                </p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                      "Optimisation du référencement naturel (SEO)"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, vos services concernant l'amélioration du référencement naturel m'intéressent. Quelles sont vos disponibilités pour organiser un entretien ?"
                    )}`}
                  >
                    Discutons de vos besoins en SEO
                  </a>
                  et travaillons ensemble pour aider votre entreprise à obtenir
                  la visibilité qu'elle mérite !
                </p>
                <img
                  className="services-icons"
                  src={PlanetIcon}
                  alt="Planet Icon"
                />
              </div>
            )
          }
          icon={
            <img
              className="seo-icon"
              src={SEOIcon}
              alt="Icône pour l'optimisation du réfèrencement naturel"
            />
          }
        />
      </div>
    </div>
  );
};

export default Services;
