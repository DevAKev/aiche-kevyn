import { useTheme } from "@hooks/ThemeContext";
import useIsMobile from "@hooks/useIsMobile";
import cv from "@assets/cv/DÉVELOPPEUR-WEB-12-06-25.pdf";
import screenCv from "@assets/images/skills/capture-pdf-cv-last.webp";

const Skills = () => {
  const { language } = useTheme();
  const skillsH1 = language === "en" ? "My Skills" : "Mes Compétences";
  const isMobile = useIsMobile();
  const desktopCv =
    language === "en" ? "View Fullscreen" : "Voir en plein écran";
  const skillsTools = language === "en" ? "Tools" : "Outils";
  // const skillsSystems =
  //   language === "en" ? "Systems & Browsers" : "Systèmes & Navigateurs";

  // Front-end skills
  const frontEndSkills = [
    "html5",
    "css3",
    "sass",
    "javascript",
    "vitejs",
    "react",
    "typescript",
    "vuejs",
    "bootstrap",
    "reactbootstrap",
    "tailwindcss",
    "materializecss",
    "materialui",
    // More front-end skills
  ];

  // Back-end skills
  const backEndSkills = [
    "nodejs",
    "php",
    "mysql",
    "sqlite",
    "apache",
    "mariadb",
    "postman",
    // More back-end skills
  ];

  // Tools skills
  const tools = [
    "vitest",
    "mocha",
    "jest",
    "jira",
    "puppeteer",
    "stackoverflow",
    "axios",
    "git",
    "webpack",
    "github",
    "figma",
    "trello",
    "notion",
    "canva",
    "slack",
    "photoshop",
    "illustrator",
    "xd",
    "vscode",
    "filezilla",
    "wordpress",
    // More tools
  ];

  // Operating systems skills
  // const systems = [
  //   "windows11",
  //   "firefox",
  //   "chrome",
  //   "android",
  //   // More tools
  // ];

  return (
    <div id="skills" className="page-content">
      <div className="skills_container">
        <h1 className="skills-title">{skillsH1}</h1>

        {/* #### CV PDF DISPLAY & DOWNLOAD #### */}
        <div className="cv-container">
          {/* Mobile */}
          {isMobile ? (
            <div className="screen-cv-container">
              <a href={cv} target="_blank" rel="noopener noreferrer" download>
                <img
                  src={screenCv}
                  alt="CV Screen Capture"
                  className="screen-cv"
                />
              </a>
            </div>
          ) : (
            // Desktop
            <div className="cv-desktop-view">
              <iframe
                src={cv}
                className="cv-iframe"
                title="CV Viewer"
                width="100%"
                height="500px"
              ></iframe>
              <div className="cv-actions">
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-view-button"
                >
                  {desktopCv}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* #### SKILLS ICONS SLIDER #### */}
        <div className="skills-container-slider">
          <h2 className="skills-subtitles">Front-end :</h2>
          <div className="skills-scroll">
            <ul className="skills-ul">
              {frontEndSkills.map((skill, index) => (
                <li key={index} className="skills-li">
                  <i
                    className={`devicon-${skill}-plain colored skills-icon`}
                  ></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="skills-subtitles">Back-end :</h2>
          <div className="skills-scroll">
            <ul className="skills-ul">
              {backEndSkills.map((skill, index) => (
                <li key={index} className="skills-li">
                  <i
                    className={`devicon-${skill}-plain colored skills-icon`}
                  ></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="skills-subtitles">{skillsTools} :</h2>
          <div className="skills-scroll">
            <ul className="skills-ul">
              {tools.map((tool, index) => (
                <li key={index} className="skills-li">
                  <i
                    className={`devicon-${tool}-plain colored skills-icon`}
                  ></i>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          {/* <h2 className="skills-subtitles">{skillsSystems} :</h2>
          <div className="skills-scroll">
            <ul className="skills-ul">
              {systems.map((system, index) => (
                <li key={index} className="skills-li">
                  <i
                    className={`devicon-${system}-plain colored skills-icon`}
                  ></i>
                  {system}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
