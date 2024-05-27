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
  const servicesTitle = language === "en" ? "My Services" : "Mes Services";

  return (
    <div id="services" className="page-content">
      <ScrollAnimation
        animateIn="animate__bounceInUp"
        animateOnce={true}
        delay={1500}
      >
        <h1 className="services-title">{servicesTitle}</h1>
        <div className="services">
          {/* Web development card */}
          <ServiceCard
            title={language === "en" ? "Web Development" : "Développement Web"}
            description={
              language === "en" ? (
                <div>
                  <p>
                    Are you looking for a web developer to propel your company
                    in the universe of digital ?
                  </p>
                  <p>
                    I design custom websites that serve as a showcase digital
                    technology to your business. Increase your visibility by and
                    attract new customers with solutions web adapted to your
                    needs.
                  </p>
                  <p>
                    Open the numeric door to your products or services, to make
                    it easy for potential customers to discover you. Whether you
                    are an SME, a large company or an NGO, I am here to meet
                    your specific needs. By choosing my services, you are
                    investing in the growth of your business.
                  </p>
                  <p>Ready for the take-off to online success ? 🚀</p>
                  <p>Contact me today to discuss your web development needs.</p>
                </div>
              ) : (
                <div>
                  <p>
                    Vous cherchez un développeur web pour propulser votre
                    entreprise dans l'univers du digital ?
                  </p>
                  <p>
                    Je conçois des sites web sur mesure qui servent de vitrine
                    digitale à votre entreprise. Augmentez votre visibilité en
                    ligne et attirez de nouveaux clients grâce à des solutions
                    web adaptées à vos besoins.
                  </p>
                  <p>
                    Ouvrez la porte numérique vers vos produits ou services,
                    pour permettre à vos clients potentiels de vous découvrir
                    facilement. Que vous soyez une PME, une grande entreprise ou
                    une ONG, je suis là pour répondre à vos besoins spécifiques.
                    En choisissant mes services de développement web, vous
                    investissez dans la croissance votre entreprise.
                  </p>
                  <p>Prêt à décoller vers le succès en ligne ? 🚀</p>
                  <p>
                    Contactez-moi dès aujourd’hui pour discuter de vos besoins
                    en développement web.
                  </p>
                </div>
              )
            }
            icon={<WebIcon />}
          />

          {/* Mobile development card */}
          <ServiceCard
            title={
              language === "en" ? "Mobile Development" : "Développement Mobile"
            }
            description={
              language === "en" ? (
                <div>
                  <p>
                    Do you want to reach your future customers on all types of
                    mobile devices?
                  </p>
                  <p>
                    Unlock the full potential of your business with custom
                    mobile apps. I develop User-friendly and visually friendly
                    mobile apps attractive, optimized to rank well in the app
                    store searches.
                  </p>
                  <p>
                    Take a mobile-first approach to connect with your customers
                    in a more personal way, right at your fingertips. Don't let
                    your business be constrained by physical boundaries.
                  </p>
                  <p>
                    Let yourself be guided through the stars and expand together
                    your digital perspectives. Contact me now today and turn
                    your vision into reality. 🌠
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Vous souhaitez atteindre vos futurs clients sur tous les
                    types d'appareils mobiles ?
                  </p>
                  <p>
                    Débloquez le plein potentiel de votre entreprise avec des
                    applications mobiles personnalisées. Je développe des
                    applications mobiles conviviales et visuellement
                    attrayantes, optimisées pour être bien classées dans les
                    recherches des magasins d'applications.
                  </p>
                  <p>
                    Adoptez une approche mobile-first pour vous connecter avec
                    vos clients de manière plus personnelle, directement à
                    portée de main. Ne laissez pas votre entreprise être limitée
                    par des frontières physiques.
                  </p>
                  <p>
                    Laissez vous guider à travers les étoiles et élargissons
                    ensemble vos perspectives numérique. Contactez-moi dès
                    aujourd'hui et transformons votre vision en réalité. 🌠
                  </p>
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
          <ServiceCard
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
          />

          {/* Graphic & design card */}
          <ServiceCard
            title={language === "en" ? "Graphic Design" : "Design Graphique"}
            description={
              language === "en" ? (
                <div>
                  <p>
                    Lacking inspiration or need a professional to support you in
                    the exploration and creation of unique visuals? 🎨
                  </p>
                  <p>
                    Turn your ideas into impressive visuals. I create original
                    designs, effective in conveying your message and seduce your
                    users.
                  </p>
                  <p>
                    From mock-up to logos, brand identity and web design, I
                    offer a wide range of graphic design services to help your
                    business stand out.
                  </p>
                  <p>
                    With an eye for detail and a creative mind, I strive to
                    deliver content that is tailored to your needs and resonates
                    with your target audience.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    En panne d'inspiration ou besoin d'un professionnel pour
                    vous accompagner dans l'exploration et la création de
                    visuels uniques ? 🎨
                  </p>
                  <p>
                    Transformez vos idées en graphisme impressionnants. Je crée
                    des designs originaux, efficaces pour transmettre votre
                    message et séduire vos utilisateurs.
                  </p>
                  <p>
                    Du maquettage aux logos, en passant par l'identité de votre
                    marque et le design web, je propose une large gamme de
                    services de design graphique pour aider votre entreprise à
                    se démarquer.
                  </p>
                  <p>
                    Avec un œil attentif aux détails et un esprit créatif, je
                    m'efforce de livrer du contenu qui soit adapté à vos besoins
                    et qui résonne avec votre public cible.
                  </p>
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
                    Like the sun standing out from the other stars in the
                    darkness of space, increase your online presence and shine
                    with an effective SEO optimization strategy.
                  </p>
                  <p>
                    Specializing in enhancing natural search engine rankings, I
                    help your business gain the visibility it deserves. With the
                    right SEO strategies, your website can climb higher in
                    search results, attract more traffic, and convert more
                    visitors into customers.
                  </p>
                  <p>
                    Don't let your website get lost in the immensity of digital
                    galaxies. Let's work together to put your business at the
                    forefront of search results.
                  </p>
                  <p>
                    Reach out today to discuss your SEO needs and let's boost
                    your online visibility together. ✨
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Tel le soleil se distinguant des autres étoiles dans
                    l’obscurité de l’espace, augmentez votre présence en ligne
                    et brillez grâce à une stratégie d’optimisation du
                    référencement naturel efficace.
                  </p>
                  <p>
                    Spécialisé dans l'amélioration du classement naturel dans
                    les moteurs de recherche, j'aide votre entreprise à obtenir
                    la visibilité qu'elle mérite. Avec les bonnes stratégies de
                    SEO, votre site web peut grimper dans les résultats de
                    recherche, attirer plus de trafic et convertir plus de
                    visiteurs en clients.
                  </p>
                  <p>
                    Ne laissez pas votre site web se perdre dans l'immensité des
                    galaxies numériques. Travaillons ensemble pour mettre votre
                    entreprise au premier plan des résultats de recherche.
                  </p>
                  <p>
                    Contactez-moi dès aujourd'hui pour discuter de vos besoins
                    en SEO et boostons ensemble votre visibilité en ligne. ✨
                  </p>
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

          {/* Responsive design card */}
          <ServiceCard
            title={
              language === "en"
                ? "Adapting to Responsive Design"
                : "Adaptation au Design Réactif"
            }
            description={
              language === "en" ? (
                <div>
                  <p>
                    Experience smooth navigation on all devices with my
                    responsive design services.
                  </p>
                  <p>
                    Specializing in website adaptation, I make sure they offer
                    optimal appearance and functionality on all screen sizes,
                    from desktops to tablets and mobile phones.
                  </p>
                  <p>
                    In the digital age, a responsive design isn't just an
                    option—it's a necessity. Don't let your website get left
                    behind. Let's work together to create a web experience that
                    your users will love, no matter what device they're on.
                  </p>
                  <p>
                    Contact me here today to discuss your responsive design
                    needs and ensure optimal navigation for your users. 📲
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Expérimentez une navigation fluide sur tous les appareils
                    grâce à mes services de design réactif.
                  </p>
                  <p>
                    Spécialisé dans l'adaptation des sites web, je m'assure
                    qu'ils offrent une apparence et une fonctionnalité optimales
                    sur toutes les tailles d'écran, des ordinateurs de bureau
                    aux tablettes et téléphones mobiles.
                  </p>
                  <p>
                    À l'ère du numérique, un design réactif n'est pas seulement
                    une option, c'est une nécessité. Ne laissez pas votre site
                    web être laissé pour compte. Travaillons ensemble pour créer
                    une expérience web que vos utilisateurs adoreront, quel que
                    soit l'appareil qu'ils utilisent.
                  </p>
                  <p>
                    Contactez-moi ici dès aujourd'hui pour discuter de vos
                    besoins en design réactif et garantir une navigation
                    optimale à vos utilisateurs. 📲
                  </p>
                </div>
              )
            }
            icon={
              <img
                className="responsive-icon"
                src={ResponsiveIcon}
                alt="Icône d'adaptation au design réactif"
              />
            }
          />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Services;
