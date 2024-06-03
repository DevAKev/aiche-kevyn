import React, { useEffect, useState } from "react";
import { useTheme } from "../../hooks/ThemeContext";
import garageParrotImg from "../../assets/images/projectsImages/img-Garage-Parrot.png";
import posterImg from "../../assets/images/projectsImages/poster.png";
import projectImg3 from "../../assets/images/projectsImages/screen-cat1.png";
import { gsap } from "gsap";
import UFOAnimation from "../Animations/UfoAnimation";

const Projects = () => {
  const { language } = useTheme();
  const projectsTitle = language === "en" ? "My Projects" : "Mes Projets";
  const [ufoAnimationDone, setUfoAnimationDone] = useState(false);

  const projects = [
    {
      title: "Garage Parrot",
      description:
        "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
      technologies: ["html5", "css3", "javascript", "jquery", "php", "mysql"],
      poster: garageParrotImg,
      link: "google.com",
    },
    {
      title: "Andragogy",
      description:
        "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
      technologies: ["react", "nodejs", "mongodb"],
      poster: posterImg,
      link: "google.com",
    },
    {
      title: "Project 3",
      description:
        "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
      technologies: ["python", "django", "postgresql"],
      poster: projectImg3,
      link: "google.com",
    },
  ];

  useEffect(() => {
    if (ufoAnimationDone) {
      const projectElements = document.querySelectorAll(".project");

      gsap.from(projectElements, {
        duration: 1,
        opacity: 0,
        scale: 0,
        y: -1000,
        z: -500,
        rotationX: -90,
        stagger: 0.3,
        ease: "power4.out",
      });
    }
  }, [ufoAnimationDone]);

  return (
    <section className="projects-section">
      <h1 id="projets" className="my-projects-title">
        {projectsTitle}
      </h1>
      <UFOAnimation onUfoAnimationDone={() => setUfoAnimationDone(true)} />
      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project ${ufoAnimationDone ? "" : "project-hidden"}`}
          >
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <i
                  key={techIndex}
                  className={`devicon-${tech}-plain project-tech-icon`}
                ></i>
              ))}
            </div>
            <div className="project-preview">
              <img id="imgProjects" src={project.poster} alt={project.title} />
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
