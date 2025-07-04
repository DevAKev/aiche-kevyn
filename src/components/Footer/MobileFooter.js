import { useTheme } from "@hooks/ThemeContext";

const MobileFooter = () => {
  const { language } = useTheme();
  const searchBtn =
    language === "en"
      ? "Let's discuss your project"
      : "Discutons de votre projet";

  const footerText =
    language === "en"
      ? "Building websites and mobile applications to boost your online presence and optimize your business performance"
      : "Réalisation de sites web et d'applications mobiles pour booster votre présence en ligne et optimiser les performances de votre entreprise";
  const menuLink =
    language === "en"
      ? {
          home: "Home",
          projects: "Achievements",
          services: "Services",
          skills: "Skills",
          about: "About",
          contact: "Contact",
        }
      : {
          home: "Accueil",
          projects: "Réalisations",
          services: "Services",
          skills: "Compétences",
          about: "À propos",
          contact: "Contact",
        };

  const copyright =
    language === "en"
      ? "Designed & Built From Scratch With ❤️ - By DevAKev ©"
      : "Conçu & Développé de A à Z avec ❤️ - Par DevAKev ©";

  const year = new Date().getFullYear();

  return (
    <footer className="mobile-footer">
      <div className="mobile-btn-container">
        <button className="mobile-search-button">
          <a
            className="mobile-contact-link"
            href={`mailto:devakev.contact@gmail.com?subject=${encodeURIComponent(
              "Je cherche un développeur"
            )}&body=${encodeURIComponent(
              "Bonjour Kévyn, j'ai consulté votre portfolio et j'aimerais m'entretenir avec vous. Quelles sont vos disponibilités pour vous partager les détails sur le projet ?"
            )}`}
          >
            {searchBtn}
          </a>
        </button>
      </div>
      <div className="mobile-text-container">
        <p className="mobile-text">{footerText}</p>
      </div>
      <div className="mobile-menu-container">
        <h2 className="mobile-menu-title">Menu</h2>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <a href="#home" className="mobile-menu-link">
              {menuLink.home}
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#projets" className="mobile-menu-link">
              {menuLink.projects}
            </a>
          </li>
          {/* <li className="mobile-menu-item">
            <a href="#services" className="mobile-menu-link">
              {menuLink.services}
            </a>
          </li> */}
          <li className="mobile-menu-item">
            <a href="#skills" className="mobile-menu-link">
              {menuLink.skills}
            </a>
          </li>
          <li className="mobile-menu-item">
            <a href="#about" className="mobile-menu-link">
              {menuLink.about}
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-copyright-container">
        <h2 className="mobile-copyright">
          {copyright} {year}
        </h2>
      </div>
    </footer>
  );
};

export default MobileFooter;
