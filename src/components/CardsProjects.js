import { useTheme } from "../hooks/ThemeContext";

const Cards_Projects = () => {
  const { language } = useTheme();
  const projectsKey = language === "en" ? "My Projects" : "Mes Projets";

  // Examples of a projects
  const projects = [
    {
      title: "Project 1",
      description: "Description du projet 1",
      technologies: ["html5", "css3", "javascript", "jquery", "php", "mysql"],
      poster: "./img-Garage-Parrot.png",
      // More details
    },
    {
      title: "Project 2",
      description: "Description du projet 2",
      technologies: ["react", "nodejs", "mongodb"],
      // More details
    },
    {
      title: "Project 3",
      description: "Description du projet 3",
      technologies: ["python", "django", "postgresql"],
      // More details
    },
    // More projects
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
            {/* projects preview */}
            <img id="imgProjects" src={project.poster} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards_Projects;
