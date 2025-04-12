import { useTheme } from "@hooks/ThemeContext";
import { useGsapProjectsScroll } from "@components/Animations/useGsapProjectsScroll";
import ProjectSection from "@components/Projects/ProjectSection";
import { getProjectsData } from "@data/projectsData";

const Projects = () => {
  const { language } = useTheme(); // Récupération de la langue actuelle
  const projectsTitle = language === "en" ? "Achievements" : "Réalisations"; // Titre des projets en fonction de la langue
  const projects = getProjectsData(language); // Récupération des données des projets en fonction de la langue

  // Animations GSAP
  useGsapProjectsScroll();

  return (
    <div id="projets" className="page-content">
      <h1 className="my-projects-title">{projectsTitle}</h1>
      <div className="projects-container">
        <ProjectSection loading="lazy" className="first" title="" />
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            loading="lazy"
            className={project.className}
            title={project.title}
            link={project.link}
            description={project.description}
            technologies={project.technologies}
            projectsLink={project.projectsLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
