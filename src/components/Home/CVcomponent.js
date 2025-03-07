import React from "react";
import { motion } from "framer-motion";
import "@styles/components/_cvComponent.scss";
// Composant Header : Informations personnelles et résumé
const Header = () => (
  <header className="cv-header">
    <h1 className="cv-title">Devakev – Développeur Web</h1>
    <p className="cv-summary">
      Passionné par les nouvelles technologies, je mets mon savoir-faire en
      front-end, back-end et gestion de projets au service de solutions
      innovantes.
    </p>
    <ul className="cv-contact">
      <li>Adresse : 13, rue Saint-Liesne, 77000 MELUN</li>
      <li>Téléphone : 0760050343</li>
      <li>Email : devakev.contact@gmail.com</li>
      <li>
        Portfolio :{" "}
        <a
          href="https://devakev.github.io/aiche-kevyn"
          target="_blank"
          rel="noopener noreferrer"
        >
          devakev.github.io/aiche-kevyn
        </a>
      </li>
    </ul>
  </header>
);

// Composant pour un élément d'expérience avec animation
const ExperienceItem = ({ title, date, description }) => (
  <motion.article
    className="cv-experience-item"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="cv-experience-title">{title}</h3>
    <time className="cv-experience-date" dateTime={date}>
      {date}
    </time>
    <p className="cv-experience-description">{description}</p>
  </motion.article>
);

// Section Expériences : Liste des expériences professionnelles
const Experiences = () => (
  <section id="experiences" className="cv-section">
    <h2 className="cv-section-title">Expériences Professionnelles</h2>
    <ExperienceItem
      title="Développeur Web Junior (indépendant) – Devakev, Melun (Hybride)"
      date="2022"
      description="Conception et développement de sites web, collaboration agile, refactoring et code review, gestion d’API avec Axios."
    />
    <ExperienceItem
      title="Stagiaire Développeur Web Front-end – Andragogy, Sète (Full Remote)"
      date="Fév - Mai 2024"
      description="Mise en place de solutions front-end innovantes, collaboration avec les équipes UI/UX et optimisation des interfaces."
    />
    <ExperienceItem
      title="Chargé de Production d’Unités Pédagogiques (indépendant)"
      date="Août - Octobre 2024"
      description="Création et gestion de contenus pédagogiques, optimisation de l’expérience apprenante et gestion de projets web."
    />
  </section>
);

// Section Formations
const Education = () => (
  <section id="formations" className="cv-section">
    <h2 className="cv-section-title">Formations</h2>
    <motion.article
      className="cv-education-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="cv-education-title">
        Graduate Développement Web & Web Mobile – Titre RNCP (BAC +2)
      </h3>
      <p className="cv-education-description">
        Formation en alternance, disponible dès Juillet, mobilité autour de
        Melun.
      </p>
    </motion.article>
  </section>
);

// Section Compétences
const Skills = () => (
  <section id="competences" className="cv-section">
    <h2 className="cv-section-title">Compétences</h2>
    <ul className="cv-skills-list">
      <li>Front-End : React.js, Vite.js, HTML5, CSS3, JavaScript ES6</li>
      <li>Back-End : Node.js, PHP</li>
      <li>Bases de données : MariaDB, MySQL</li>
      <li>
        Gestion de projets, collaboration agile, tests de sécurité, rédaction de
        documentation
      </li>
    </ul>
  </section>
);

// Section Langues
const Languages = () => (
  <section id="langues" className="cv-section">
    <h2 className="cv-section-title">Langues</h2>
    <ul className="cv-languages-list">
      <li>Français : Natif</li>
      <li>Anglais : Intermédiaire (B1)</li>
      <li>Espagnol : Notion (A1)</li>
    </ul>
  </section>
);

// Section Centres d’intérêt
const Interests = () => (
  <section id="interets" className="cv-section">
    <h2 className="cv-section-title">Centres d’intérêt</h2>
    <ul className="cv-interests-list">
      <li>Randonnée et Escalade</li>
      <li>Photographie</li>
      <li>Histoire</li>
      <li>Archéologie</li>
    </ul>
  </section>
);

// Footer
const Footer = () => (
  <footer className="cv-footer">
    <p>© new Date().getFullYear() Devakev – Tous droits réservés</p>
  </footer>
);

// Composant principal regroupant toutes les sections du CV
const CVComponent = () => (
  <div className="cv-container">
    <Header />
    <main className="cv-main">
      <Education />
      <Experiences />
      <Skills />
      <Languages />
      <Interests />
    </main>
    <Footer />
  </div>
);

export default CVComponent;
