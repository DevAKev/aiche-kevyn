import { useTheme } from "@hooks/ThemeContext";

const Skills = () => {
  const { language } = useTheme();
  const skillsH1 = language === "en" ? "My Skills" : "Mes Compétences";

  // Front-end skills
  const frontEndSkills = [
    "html5",
    "css3",
    "sass",
    "javascript",
    "jquery",
    "react",
    "nextjs",
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
    "python",
    // More back-end skills
  ];

  // Tools skills
  const tools = [
    "git",
    "webpack",
    "github",
    "figma",
    "apache",
    "nginx",
    "bash",
    "trello",
    "slack",
    "photoshop",
    "illustrator",
    "xd",
    "vscode",
    "filezilla",
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
                  <i className={`devicon-${skill}-plain skills-icon`}></i>
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
                  <i className={`devicon-${skill}-plain skills-icon`}></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="skills-subtitles">Outils :</h2>
          <div className="skills-scroll">
            <ul className="skills-ul">
              {tools.map((tool, index) => (
                <li key={index} className="skills-li">
                  <i className={`devicon-${tool}-plain skills-icon`}></i>
                  {tool}
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
