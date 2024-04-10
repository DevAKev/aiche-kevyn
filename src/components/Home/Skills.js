import { useTheme } from "../../hooks/ThemeContext";

const Skills = () => {
  const { language } = useTheme();
  const skillsKey = language === "en" ? "My Skills" : "Mes Compétences";

  // List of skills
  const skills = [
    "html5",
    "css3",
    "sass",
    "javascript",
    "jquery",
    "react",
    "nodejs",
    "php",
    "mysql",
    "git",
    "github",
    "figma",
    "apache",
    "filezilla",
    // More skills here
  ];

  return (
    <div className="about__skill-info">
      <h3 className="my-skills-title">{skillsKey}</h3>
      <ul className="about__skills">
        {skills.map((skill, index) => (
          <li key={index} className="about__skill">
            <i className={`devicon-${skill}-plain skill-icon`}></i>
            {skill} &nbsp;-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
