import { useTheme } from "@hooks/ThemeContext";

const DesktopFooter = () => {
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
    <footer className="desktop-footer">
      <div className="desktop-btn-container">
        <div className="desktop-text-container">
          <p className="desktop-text">{footerText}</p>
        </div>
        <button className="desktop-search-button">
          <a
            className="desktop-contact-link"
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

      <div className="desktop-menu-container">
        <h2 className="desktop-menu-title">Menu</h2>
        <ul className="desktop-menu-list">
          <li className="desktop-menu-item">
            <a href="#home" className="desktop-menu-link">
              {menuLink.home}
            </a>
          </li>
          <li className="desktop-menu-item">
            <a href="#projets" className="desktop-menu-link">
              {menuLink.projects}
            </a>
          </li>
          {/* <li className="desktop-menu-item">
            <a href="#services" className="desktop-menu-link">
              {menuLink.services}
            </a>
          </li> */}
          <li className="desktop-menu-item">
            <a href="#skills" className="desktop-menu-link">
              {menuLink.skills}
            </a>
          </li>
          <li className="desktop-menu-item">
            <a href="#about" className="desktop-menu-link">
              {menuLink.about}
            </a>
          </li>
          <div className="desktop-copyright-container">
            <h2 className="desktop-copyright">
              {copyright} {year}
            </h2>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default DesktopFooter;
