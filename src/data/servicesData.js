import { ReactComponent as WebIcon } from "@assets/images/icons/website.svg";
import MobileIcon from "@assets/images/icons/mobiles.png";
import GraphicDesignIcon from "@assets/images/icons/design.png";
import SEOIcon from "@assets/images/icons/seo.png";

const servicesEmail = "devakev.contact@gmail.com";

export const getServicesData = (language) => {
  const isEn = language === "en";

  return [
    {
      // Service 1 => Web Development
      title: isEn ? "Web Development" : "Développement Web",
      description: (
        <div>
          <p>
            {isEn
              ? "Custom websites design that reflects your brand identity. Invest in your growth and increase your online visibility to attract new customers to your digital showcase."
              : "Conception de sites Web personnalisés qui reflètent l'identité de votre marque. Investissez dans votre croissance et augmentez votre visibilité en ligne pour attirer de nouveaux clients vers votre vitrine digitale."}
          </p>
          <p>
            {isEn
              ? "Ready to take off towards online success ?"
              : "Prêt à décoller vers le succès en ligne ?"}
          </p>
          <p>
            <a
              className="contact-link"
              href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                isEn ? "Web Development Project" : "Projet de développement web"
              )}&body=${encodeURIComponent(
                isEn
                  ? "Hello, I am interested in your web development services. Can we discuss this further?"
                  : "Bonjour Kévyn, je suis intéressé par vos services de développement web. Pouvons-nous en discuter davantage ?"
              )}`}
            >
              {isEn ? "Contact me now" : "Votre Devis GRATUIT ➡️"}
            </a>
          </p>
        </div>
      ),
      icon: <WebIcon />,
    },

    // Service 2 => Mobile Development
    {
      title: isEn
        ? "Mobile Development & Responsive Design"
        : "Développement Mobile & Design Réactif",
      description: (
        <div>
          <p>
            {isEn
              ? "Unlock the full potential of your business with customized mobile apps, user-friendly, visually appealing, and optimized to rank well in app store searches."
              : "Libérez tout le potentiel de votre entreprise avec des applications mobiles personnalisées, conviviales, visuellement attrayantes et optimisées pour bien se classer dans les recherches des magasins d’applications."}
          </p>
          <p>
            {isEn ? "Together, " : "Ensemble, "}
            <a
              className="contact-link"
              href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                isEn
                  ? "Mobile-first Web Development"
                  : "Développement Web Mobile First"
              )}&body=${encodeURIComponent(
                isEn
                  ? "Hello Kévyn, I would like to propose a mobile web development project. What are the steps to follow ?"
                  : "Bonjour Kévyn, j'aimerais vous proposer un projet de développement web mobile. Quelles sont les étapes à suivre ?"
              )}`}
            >
              {isEn
                ? "let's turn your vision into reality !"
                : "transformons votre vision en réalité !"}
            </a>
            {isEn
              ? " Let yourself be guided through the vastness of the web and broaden your digital perspectives."
              : " Laissez vous guider à travers l'immensité du web et élargissez vos perspectives numériques."}
          </p>
        </div>
      ),
      icon: (
        <img
          className="mobile-icon"
          src={MobileIcon}
          alt="Icône de développement mobile"
        />
      ),
    },

    // Service 3 => Graphic Design
    {
      title: isEn ? "Graphic Design" : "Design Graphique",
      description: (
        <div>
          <p>
            <a
              className="contact-link"
              href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                isEn
                  ? "Improving a company's visual identity"
                  : "Amélioration de l'identité visuelle d'une entreprise"
              )}&body=${encodeURIComponent(
                isEn
                  ? "Hello Kévyn, I would like to discuss with you the possibilities of improving my company's visual identity. What are the information to provide ?"
                  : "Bonjour Kévyn, j'aimerais discuter avec vous des possibilités d'amélioration de l'identité visuelle de mon entreprise. Quels sont les éléments d'informations à fournir ?"
              )}`}
            >
              {isEn
                ? "Are you lacking inspiration ?"
                : "En panne d'inspiration ?"}
            </a>{" "}
            {isEn
              ? "Would you like support in creating unique visuals that will allow you to promote your brand identity ?"
              : "Vous souhaitez un accompagnement dans la création de visuels uniques qui vous permettront de promouvoir l'identité de votre marque ?"}
          </p>
          <p>
            {isEn ? "You are in a good place." : "Vous êtes au bon endroit."}
          </p>
          <p>
            {isEn
              ? "With a keen eye for detail and a creative mind, I offer a wide range of services to help your business transform your ideas into standout graphics !"
              : "Avec un œil attentif aux détails et un esprit créatif, je propose une large gamme de services pour aider votre entreprise à transformer vos idées en graphisme hors du commun !"}
          </p>
        </div>
      ),
      icon: (
        <img
          className="design-icon"
          src={GraphicDesignIcon}
          alt="Graphic design icon"
        />
      ),
    },

    // Service 4 => SEO Optimization
    {
      title: isEn
        ? "Optimization of natural referencing (SEO)"
        : "Optimisation du référencement naturel (SEO)",
      description: (
        <div>
          <p>
            {isEn
              ? "Improve your visibility on search engines and attract qualified traffic to your website. I apply SEO best practices to maximize your ranking and conversion rate."
              : "Améliorez votre visibilité sur les moteurs de recherche et attirez un trafic qualifié vers votre site Web. J'applique les meilleures pratiques SEO pour maximiser votre positionnement et votre taux de conversion."}
          </p>
          <p>
            <a
              className="contact-link"
              href={`mailto:${servicesEmail}?subject=${encodeURIComponent(
                isEn ? "SEO optimization" : "Optimisation SEO"
              )}&body=${encodeURIComponent(
                isEn
                  ? "Hello, I need your help to improve my website’s SEO. Can you guide me ?"
                  : "Bonjour Kévyn, j'ai besoin de votre aide pour améliorer le référencement de mon site. Pouvez-vous me guider ?"
              )}`}
            >
              {isEn
                ? "Let's boost your SEO now 🚀"
                : "Boostons votre SEO dès maintenant 🚀"}
            </a>
          </p>
        </div>
      ),
      icon: <img className="seo-icon" src={SEOIcon} alt="SEO icon" />,
    },
  ];
};
