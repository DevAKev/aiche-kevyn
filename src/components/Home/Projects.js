import { useTheme } from "../../hooks/ThemeContext";
import garageParrotImg from "../../assets/images/projectsImages/img-Garage-Parrot.png";
import posterImg from "../../assets/images/projectsImages/poster.png";
import projectImg3 from "../../assets/images/projectsImages/screen-cat1.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Projects = () => {
  const { language } = useTheme();
  const projectsTitle = language === "en" ? "My Projects" : "Mes Projets";

  // Examples of a projects
  const projects = [
    {
      title: "Garage Parrot",
      description:
        "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
      technologies: ["html5", "css3", "javascript", "jquery", "php", "mysql"],
      poster: garageParrotImg,
      link: "google.com",
      // More details
    },
    {
      title: "Andragogy",
      description:
        "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
      technologies: ["react", "nodejs", "mongodb"],
      poster: posterImg,
      link: "google.com",
      // More details
    },
    {
      title: "Project 3",
      description:
        "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
      technologies: ["python", "django", "postgresql"],
      poster: projectImg3,
      link: "google.com",
      // More details
    },
    // More projects
  ];

  return (
    <section className="projects-section">
      <ScrollAnimation animateIn="animate__bounceInUp" animateOnce={true}>
        <h1 id="projets" className="my-projects-title">
          {projectsTitle}
        </h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project">
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
              {/* projects preview */}
              <div className="project-preview">
                <img
                  id="imgProjects"
                  src={project.poster}
                  alt={project.title}
                />
                {/* lien hypertexte */}
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
      </ScrollAnimation>
    </section>
  );
};

export default Projects;
