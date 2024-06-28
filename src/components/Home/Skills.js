import { useTheme } from "@hooks/ThemeContext";

const Skills = () => {
  const { language } = useTheme();
  const skillsH1 = language === "en" ? "My Skills" : "Mes Compétences";
  const skillsTools = language === "en" ? "Tools" : "Outils";
  const skillsSystems =
    language === "en" ? "Systems & Browsers" : "Systèmes & Navigateurs";

  // Front-end skills
  const frontEndSkills = [
    "html5",
    "css3",
    "sass",
    "javascript",
    "jquery",
    "vitejs",
    "react",
    "vuejs",
    "bootstrap",
    "tailwindcss",
    "materialui",
    // More front-end skills
  ];

  // Back-end skills
  const backEndSkills = [
    "nodejs",
    "php",
    "mysql",
    "sqlite",
    "python",
    "bash",
    "nginx",
    "apache",
    "mariadb",
    "postman",
    // More back-end skills
  ];

  // Tools skills
  const tools = [
    "axios",
    "git",
    "webpack",
    "github",
    "figma",
    "trello",
    "slack",
    "photoshop",
    "illustrator",
    "xd",
    "vscode",
    "filezilla",
    // More tools
  ];

  // Operating systems skills
  const systems = [
    "windows11",
    "firefox",
    "chrome",
    "edge",
    "safari",
    "opera",
    "android",
    "raspberrypi",
    // More tools
  ];

  return (
    <div id="skills" className="page-content">
      <div className="skills_container">
        <h1 className="skills-title">{skillsH1}</h1>
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
          <h2 className="skills-subtitles">{skillsSystems} :</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
