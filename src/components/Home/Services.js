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
                    I create static and responsive websites tailored to your
                    needs. A website is the showcase of your business,
                    increasing your visibility and attracting new customers.
                  </p>
                  <p>
                    Open the numeric door to your products or services, to make
                    it easy for potential customers to discover you. Whether you
                    are an SME, a large company or an NGO, I can meet your
                    specific needs. By choosing my services, you are investing
                    in the growth of your business.
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
                    Je crée des sites web statiques et réactifs adaptés à vos
                    besoins. Un site web est la vitrine de votre entreprise,
                    augmentant votre visibilité et attirant de nouveaux clients.
                  </p>
                  <p>
                    Ouvrez la porte numérique vers vos produits ou services,
                    pour permettre à vos clients potentiels de vous découvrir
                    facilement. Que vous soyez une PME, une grande entreprise ou
                    une ONG, je peux répondre à vos besoins spécifiques. En
                    choisissant mes services, vous investissez dans la
                    croissance de votre entreprise.
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
                    Do you want to reach your future customers on any type of
                    device ?
                  </p>
                  <p>
                    Unlock the full potential of your business with custom
                    mobile apps. I develop user-friendly and visually appealing
                    mobile apps that are not only easy to use but also rank well
                    in app store searches.
                  </p>
                  <p>
                    Experience the power of a mobile-first approach, I help you
                    connect with your customers on a more personal level, right
                    at your fingertips. Don't let your business be constrained
                    by physical boundaries.
                  </p>
                  <p>
                    Let me guide you through the stars and let's broaden your
                    digital perspectives together. Contact me today and let's
                    turn your vision into reality. 🌠
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Vous souhaitez atteindre vos futurs clients sur n'importe
                    quel type d'appareil ?
                  </p>
                  <p>
                    Débloquez le plein potentiel de votre entreprise avec des
                    applications mobiles personnalisées. Je développe des
                    applications mobiles conviviales et visuellement attrayantes
                    qui sont non seulement faciles à utiliser et se classent
                    également bien dans les recherches des magasins
                    d'applications.
                  </p>
                  <p>
                    Expérimentez la puissance d'une approche mobile-first, je
                    vous aide à vous connecter avec vos clients à un niveau plus
                    personnel, directement à portée de main. Ne laissez pas
                    votre entreprise être limitée par des frontières physiques.
                  </p>
                  <p>
                    Laissez moi vous guider à traver les étoiles et élargissons
                    ensemble vos perspectives numérique. Contactez-moi
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
                    design and develop mobile games that are not just visually
                    appealing and user-friendly, but also packed with fun and
                    excitement.
                  </p>
                  <p>
                    Experience the thrill of engaging gameplay and impressive
                    graphics, right on your mobile device. Whether you're
                    looking to engage your audience with a casual game or
                    captivate them with a more complex one, I've got you
                    covered.
                  </p>
                  <p>
                    Let's transform your gaming idea into a mobile reality that
                    keeps players coming back.
                  </p>
                  <p>
                    Get in touch today to discuss your mobile game development
                    needs.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Plongez votre public dans le monde du jeu mobile avec le
                    développement de jeux personnalisés. Spécialisé en
                    JavaScript, je conçois et développe des jeux mobiles qui
                    sont non seulement visuellement attrayants et conviviaux,
                    mais aussi remplis de fun et d'excitation.
                  </p>
                  <p>
                    Vivez le frisson d'un gameplay engageant et de graphismes
                    impressionnants, directement sur votre appareil mobile. Que
                    vous cherchiez à engager votre public avec un jeu
                    occasionnel ou à le captiver avec un jeu plus complexe, je
                    suis là pour vous.
                  </p>
                  <p>
                    Transformons votre idée de jeu en une réalité mobile qui
                    incite les joueurs à revenir.
                  </p>
                  <p>
                    Contactez-moi dès aujourd'hui pour discuter de vos besoins
                    en matière de développement de jeux mobiles.
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
                    Lacking inspiration or need a professional to assist you in
                    exploring and researching visuals ?
                  </p>
                  <p>
                    Turn your ideas into impressive visuals. I create designs
                    that are not only visually appealing but also user-friendly
                    and effective in conveying your message.
                  </p>
                  <p>
                    From assistance to mock-up, logos and brand identity and web
                    design, I offer a wide range of design services. Design that
                    can help your business stand out.
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
                    vous accompagner dans l'exploration et la recherche de
                    visuels ?
                  </p>
                  <p>
                    Transformez vos idées en graphisme impressionnants. Je crée
                    des designs qui sont non seulement visuellement attrayants,
                    mais aussi conviviaux et efficaces pour transmettre votre
                    message.
                  </p>
                  <p>
                    De l'assistance au maquettage, en passant par les logos et
                    l'identité de votre marque et au design web, je propose une
                    large gamme de services de design graphique qui peuvent
                    aider votre entreprise à se démarquer.
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
                    Increase your online presence and shine like the sun
                    standing out in the darkness of space, with an effective SEO
                    optimization strategy.
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
                    Augmentez votre présence en ligne et brillez comme le soleil
                    se distinguant dans l’obscurité de l’espace, grâce à une
                    stratégie d’optimisation du référencement naturel efficace.
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
                    galaxies du numérique. Travaillons ensemble pour mettre
                    votre entreprise au premier plan des résultats de recherche.
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
                    Experience seamless browsing across all devices with my
                    responsive design services.
                  </p>
                  <p>
                    I specialize in adapting websites to ensure they look and
                    function optimally on any screen size, from desktops to
                    tablets and mobile phones.
                  </p>
                  <p>
                    In the digital age, a responsive design isn't just an
                    option—it's a necessity. Don't let your website get left
                    behind. Let's work together to create a web experience that
                    your users will love, no matter what device they're on.
                  </p>
                  <p>
                    Contact me today to discuss your responsive design needs and
                    together we can launch your website into the digital space.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Expérimentez une navigation sans couture sur tous les
                    appareils avec mes services de design réactif.
                  </p>
                  <p>
                    Je suis spécialisé dans l'adaptation des sites web pour
                    garantir qu'ils ont une apparence et une fonctionnalité
                    optimales sur n'importe quelle taille d'écran, des
                    ordinateurs de bureau aux tablettes et téléphones mobiles.
                  </p>
                  <p>
                    À l'ère du numérique, un design réactif n'est pas seulement
                    une option, c'est une nécessité. Ne laissez pas votre site
                    web être laissé pour compte. Travaillons ensemble pour créer
                    une expérience web que vos utilisateurs adoreront, quel que
                    soit l'appareil qu'ils utilisent.
                  </p>
                  <p>
                    Contactez-moi dès aujourd'hui pour discuter de vos besoins
                    en matière de design réactif.
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
