// Données des projets FR/EN
export const getProjectsData = (language) => {
  const translations = {
    link: language === "en" ? "Click to view" : "Cliquer pour voir",
    description: {
      // GARAGE PARROT */
      project1: {
        en: "Custom website design for a company specializing in the repair and resale of used vehicles",
        fr: "Création d’un site web sur mesure pour une entreprise spécialisée dans la réparation et la revente de véhicules d’occasion",
      },
      // ANDRAGOGY */
      project2: {
        en: "Development of a platform for an organization offering educational training adapted to the needs of learners",
        fr: "Développement d’une plateforme pour un organisme proposant des formations pédagogiques adaptée aux besoins des apprenants",
      },
      // WEB AGENCY */
      project3: {
        en: "Design of a modern showcase website for a digital marketing agency",
        fr: "Conception d'un site vitrine moderne pour une agence spécialisée en marketing digital",
      },
      // LES AMIS DE LA MONTAGNE */
      project4: {
        en: "Website creation for a non-profit organization dedicated to mountain and environmental conservation",
        fr: "Création d’un site web pour une association à but non lucratif dédiée à la protection de la montagne et de l'environnement",
      },
      // DRAPEAUX DU MONDE */
      project5: {
        en: "Development of an interactive educational website for learning the names of countries, their flags, and major cities around the world",
        fr: "Développement d’un site pédagogique interactif pour l’apprentissage des noms des pays, de leurs drapeaux et des principales villes du monde",
      },
      // TROUVEZ VOTRE VOITURE */
      project6: {
        en: "WORK IN PROGRESS: Application to search used vehicles on French classified ad sites, with filters and data automation.",
        fr: "PROJET EN COURS : Application de recherche de véhicules d'occasion sur les sites d'annonces en France avec filtres et automatisation.",
      },
      // FAMILINK */
      project7: {
        en: "WORK IN PROGRESS: Application to manage family projects and organize events.",
        fr: "PROJET EN COURS : Application pour gérer les projets de famille et organiser les événements.",
      },
    },
  };

  return [
    // GARAGE PARROT */
    {
      className: "second",
      title: "Garage Parrot",
      link: "http://garageparrot.les-amis-de-la-montagne.go.yj.fr",
      description: translations.description.project1[language],
      technologies: [
        "figma",
        "trello",
        "html5",
        "css3",
        "javascript",
        "jquery",
        "php",
        "mysql",
        "npm",
      ],
    },

    // ANDRAGOGY */
    {
      className: "third",
      title: "Andragogy",
      link: "https://andragogy.fr/",
      description: translations.description.project2[language],
      technologies: [
        "figma",
        "trello",
        "html5",
        "css3",
        "sass",
        "javascript",
        "react",
        "vitejs",
        "axios",
      ],
    },

    // WEB AGENCY */
    {
      className: "fourth",
      title: "Web Agency",
      link: "https://devakev.github.io/Web-Agency/",
      description: translations.description.project3[language],
      technologies: ["figma", "trello", "html5", "css3"],
    },

    // LES AMIS DE LA MONTAGNE */
    {
      className: "fifth",
      title: "Les amis de la montagne",
      link: "https://devakev.github.io/les.amis.de.la.montagne.fr/",
      description: translations.description.project4[language],
      technologies: ["figma", "trello", "html5", "css3"],
    },

    // DRAPEAUX DU MONDE */
    {
      className: "sixth",
      title: "Drapeaux du Monde",
      link: "https://devakev.github.io/REACT-APP-COUNTRIES1/",
      description: translations.description.project5[language],
      technologies: [
        "figma",
        "trello",
        "html5",
        "css3",
        "react",
        "axios",
        "reactrouter",
      ],
    },

    // TROUVEZ VOTRE VOITURE */
    {
      className: "seventh",
      title: "Trouvez votre voiture",
      link: "https://github.com/DevAKev/trouvez-votre-voiture",
      description: translations.description.project6[language],
      technologies: [
        "figma",
        "trello",
        "html5",
        "css3",
        "react",
        "axios",
        "vitejs",
        "express",
        "tailwindcss",
        "puppeteer",
      ],
    },

    // FAMILINK */
    {
      className: "eight",
      title: "Familink",
      link: "#",
      description: translations.description.project7[language],
      technologies: [
        "figma",
        "trello",
        "html5",
        "css3",
        "react",
        "axios",
        "vitejs",
        "express",
      ],
    },
  ].map((project) => ({
    ...project,
    projectsLink: translations.link,
  }));
};
