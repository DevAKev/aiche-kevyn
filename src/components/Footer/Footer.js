export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container-text">
        <p className="footer-text">
          This website is a personal project created by Kevyn Aiche....
        </p>
        <div className="footer-container-button">
          <button className="button-search">Je cherche un développeur</button>
        </div>
      </div>
      <div className="footer-container-menu">
        <h2 className="footer-menu-title">Menu</h2>
        <ul className="footer-menu-list">
          <li className="footer-menu-item">
            <a href="#home" className="footer-menu-link">
              Accueil
            </a>
          </li>
          <li className="footer-menu-item">
            <a href="#about" className="footer-menu-link">
              À propos
            </a>
          </li>
          <li className="footer-menu-item">
            <a href="#skills" className="footer-menu-link">
              Compétences
            </a>
          </li>
          <li className="footer-menu-item">
            <a href="#projects" className="footer-menu-link">
              Projets
            </a>
          </li>
          <li className="footer-menu-item">
            <a href="#contact" className="footer-menu-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-container-contact">
        <h2 className="footer-contact-title">Contact</h2>
        <ul className="footer-contact-list">
          <li className="footer-contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Paris, France</span>
          </li>
          <li className="footer-contact-item">
            <i className="fas fa-envelope"></i>
            <span>
              <link
                href="mailto:kevynpro7700@gmail.com"
                className="footer-contact-link"
              ></link>
            </span>
          </li>
          <li className="footer-contact-item">
            <i className="fas fa-phone"></i>
            <span>
              <a href="tel:+331 23 45 67 89" className="footer-contact-link">
                +331 23 45 67 89
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="footer-container-copyright">
        <h2 className="copyright">Built with ❤️ by DevAKev © {year}</h2>
      </div>
    </footer>
  );
}
