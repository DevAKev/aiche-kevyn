import { useTheme } from "@hooks/ThemeContext";
import ServiceCard from "@components/Services/ServiceCard";
import { ReactComponent as WebIcon } from "@assets/images/icons/website.svg";
import MobileIcon from "@assets/images/icons/mobiles.png";
// import GamesIcon from "@assets/images/icons/games.png";
import GraphicDesignIcon from "@assets/images/icons/design.png";
import SEOIcon from "@assets/images/icons/seo.png";
import ResponsiveIcon from "@assets/images/icons/responsive.png";

const Services = () => {
  const { language } = useTheme();
  const servicesTitle = language === "en" ? "My Services" : "Mes Services";

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
                  into the world of the internet?
                </p>
                <p>
                  I design custom websites that serve as a showcase digital to
                  your business. Increase your visibility and attract new
                  customers.
                </p>
                <p>
                  Whether you are an SME, a large company or an NGO, I am here
                  to meet your needs. By choosing my services, you are investing
                  in the growth of your business.
                </p>
                <p>Ready for the take-off to online success ? 🚀</p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Web Development Project"
                    )}&body=${encodeURIComponent(
                      "Hello, I am interested in your web development services. Can we discuss this further?"
                    )}`}
                  >
                    Contact me today
                  </a>
                  to discuss your web development needs.
                </p>
              </div>
            ) : (
              <div>
                <p>
                  Vous cherchez un développeur web pour propulser votre
                  entreprise dans l'univers d'internet ?
                </p>
                <p>
                  Je conçois des sites web sur mesure qui servent de vitrine
                  digitale à votre entreprise. Augmentez votre visibilité en
                  ligne et attirez de nouveaux clients.
                </p>
                <p>
                  Que vous soyez une PME, une grande entreprise ou une ONG, je
                  suis là pour répondre à vos besoins. En choisissant mes
                  services, vous investissez dans la croissance de votre
                  entreprise.
                </p>
                <p>Prêt à décoller vers le succès en ligne ? 🚀</p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Projet de développement web"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, je suis intéressé par vos services de développement web. Pouvons-nous en discuter davantage ?"
                    )}`}
                  >
                    Contactez-moi
                  </a>
                  dès aujourd’hui pour discuter de vos besoins en développement
                  web.
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
                <p>Do you want to reach your targets on all mobile devices?</p>
                <p>
                  Unlock the full potential of your business with customized
                  mobile apps, user-friendly, visually appealing, and optimized
                  to rank well in app store searches.
                </p>
                <p>
                  Take a mobile-first approach to connect with your customers
                  intuitively and more personally, right at your fingertips.
                </p>
                <p>
                  Together,{" "}
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Mobile-first Web Development"
                    )}&body=${encodeURIComponent(
                      "Hello Kévyn, I would like to propose a mobile web development project. What are the steps to follow ?"
                    )}`}
                  >
                    let's turn your vision into reality.
                  </a>
                  Let yourself be guided through the vastness of the web and
                  broaden your digital perspectives.🌠
                </p>
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
                  Adoptez une approche mobile-first pour vous connecter avec vos
                  clients de manière intuitive et plus personnelle, directement
                  à portée de main.
                </p>
                <p>
                  Ensemble,{" "}
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Développement Web Mobile First"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, j'aimerais vous proposer un projet de développement web mobile. Quels sont les étapes à suivre ?"
                    )}`}
                  >
                    transformons votre vision en réalité.
                  </a>
                  Laissez vous guider à travers l'immensité du web et élargissez
                  vos perspectives numériques. 🌠
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
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Improving a company's visual identity"
                    )}&body=${encodeURIComponent(
                      "Hello Kévyn, I would like to discuss with you the possibilities of improving my company's visual identity. What are the information to provide ?"
                    )}`}
                  >
                    Are you lacking inspiration ?
                  </a>
                  Do you need assistance in exploring and creating unique
                  visuals?
                </p>
                <p>
                  Turn your ideas into extraordinary, innovative, and effective
                  graphics to convey your message and captivate your users.
                </p>
                <p>
                  A design that reflects your image and effectively promotes
                  your brand identity? It's possible! I offer a wide range of
                  services to help your company stand out.
                </p>
                <p>
                  With a keen eye for detail and a creative mindset, I strive to
                  deliver content that is tailored to your preferences and
                  resonates with your target audience. 🎨
                </p>
              </div>
            ) : (
              <div>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Amélioration de l'identité visuelle d'une entreprise"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, j'aimerais discuter avec vous des possibilités d'amélioration de l'identité visuelle de mon entreprise. Quels sont les éléments d'informations à fournir ?"
                    )}`}
                  >
                    En panne d'inspiration ?
                  </a>
                  Vous souhaitez un accompagnement dans l'exploration et la
                  création de visuels uniques ?
                </p>
                <p>
                  Transformez vos idées en graphisme hors du commun, innovant et
                  efficace pour transmettre votre message et séduire vos
                  utilisateurs.
                </p>
                <p>
                  Un design qui vous ressemble et qui permet de promouvoir
                  efficacement l'identité de votre marque ? C'est possible ! Je
                  propose une large gamme de services pour aider votre
                  entreprise à se démarquer.
                </p>
                <p>
                  Avec un œil attentif aux détails et un esprit créatif, je
                  m'efforce de livrer du contenu qui soit adapté à vos envies et
                  qui résonne avec votre public cible. 🎨
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
                  Enhance your online presence and shine in the darkness of the
                  internet through an effective natural search engine
                  optimization strategy.
                </p>
                <p>
                  Specialized in improving natural rankings for search engines,
                  I help your company achieve the visibility it deserves. With
                  the right SEO strategies, your website can climb in search
                  results, attract more traffic, and convert more visitors into
                  customers
                </p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Optimization of natural referencing (SEO)"
                    )}&body=${encodeURIComponent(
                      "Hello Kévyn, I am interested in your services regarding the improvement of natural referencing. What are your availabilities to organize a meeting ?"
                    )}`}
                  >
                    Let's discuss your SEO needs
                  </a>
                  and together enhance your online visibility to put your
                  business at the forefront of search results. ✨
                </p>
              </div>
            ) : (
              <div>
                <p>
                  Augmentez votre présence en ligne et brillez dans l'obscurité
                  du net grâce à une stratégie d’optimisation du référencement
                  naturel efficace.
                </p>
                <p>
                  Spécialisé dans l'amélioration du classement naturel pour les
                  moteurs de recherche, j'aide votre entreprise à obtenir la
                  visibilité qu'elle mérite. Avec les bonnes stratégies de SEO,
                  votre site web peut grimper dans les résultats de recherche,
                  attirer plus de trafic et convertir plus de visiteurs en
                  clients.
                </p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Optimisation du référencement naturel (SEO)"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, vos services concernant l'amélioration du référencement naturel m'intéressent. Quelles sont vos disponibilités pour organiser un entretien ?"
                    )}`}
                  >
                    Discutons de vos besoins en SEO
                  </a>
                  et boostons ensemble votre visibilité en ligne pour mettre
                  votre entreprise au premier plan des résultats de recherche.
                  ✨
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
                  Experience smooth navigation on all devices with my responsive
                  design services.
                </p>
                <p>
                  Specializing in website adaptation, I make sure they offer
                  optimal appearance and functionality on all screen sizes, from
                  desktops to tablets and mobile phones.
                </p>
                <p>
                  In the digital age, a responsive design isn't just an option —
                  It's a necessity. Don't let your website get left behind.
                  Let's work together to create a web experience that your users
                  will love, no matter what device they're on.
                </p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Adapting a website to all devices"
                    )}&body=${encodeURIComponent(
                      "Hello Kévyn, I would like to adapt my website to be accessible on all devices. How can we proceed ?"
                    )}`}
                  >
                    Share all your questions here
                  </a>
                  to discuss your responsive design needs and ensure optimal
                  navigation for your users. 📲
                </p>
              </div>
            ) : (
              <div>
                <p>
                  Expérimentez une navigation fluide sur tous les appareils
                  grâce à mes services de design réactif.
                </p>
                <p>
                  Spécialisé dans l'adaptation des sites web, je m'assure qu'ils
                  offrent une apparence et une fonctionnalité optimales sur
                  toutes les tailles d'écran, des ordinateurs de bureau aux
                  tablettes et téléphones mobiles.
                </p>
                <p>
                  À l'ère du numérique, un design réactif n'est pas seulement
                  une option — C'est une nécessité. Ne laissez pas votre site
                  web être laissé pour compte. Travaillons ensemble pour créer
                  une expérience web que vos utilisateurs adoreront, quel que
                  soit l'appareil qu'ils utilisent.
                </p>
                <p>
                  <a
                    className="contact-link"
                    href={`mailto:kevynpro7700@gmail.com?subject=${encodeURIComponent(
                      "Adaptation d'un site web sur tout les appareils"
                    )}&body=${encodeURIComponent(
                      "Bonjour Kévyn, je souhaite adapter mon site web pour qu'il soit accessible sur tous les appareils. Comment pouvons-nous procéder ?"
                    )}`}
                  >
                    Partagez ici toutes vos questions
                  </a>
                  pour discuter de vos besoins en design réactif et garantir une
                  navigation optimale à vos utilisateurs. 📲
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
    </div>
  );
};

export default Services;

// ###### TODO : AJOUTER LIENS VERS CONTACT
