import React from "react";
import { useTheme } from "../hooks/ThemeContext";

const Cards_Projects = () => {
  const { language } = useTheme();
  const projectsKey = language === "en" ? "My Projects" : "Mes Projets";

  // Examples of a projects
  const projects = [
    {
      title: "Project 1",
      description: "Description du projet 1",
      technologies: ["html5", "css3", "javascript"],
      // poster: "src/assets/img/logo192.png",
      // Plus de détails ou des champs si nécessaire
    },
    {
      title: "Project 2",
      description: "Description du projet 2",
      technologies: ["react", "nodejs", "mongodb"],
      // Plus de détails ou des champs si nécessaire
    },
    {
      title: "Project 3",
      description: "Description du projet 3",
      technologies: ["python", "django", "postgresql"],
      // Plus de détails ou des champs si nécessaire
    },
    // Projets supplémentaire au besoin
  ];

  return (
    <section className="projects-section">
      <h3 className="my-projects-title">{projectsKey}</h3>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <i
                  key={techIndex}
                  className={`devicon-${tech}-plain project-tech-icon`}
                ></i>
              ))}
            </div>
            {/* Aperçu projets */}
            <img src={project.poster} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards_Projects;
