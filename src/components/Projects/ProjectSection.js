const ProjectSection = ({
  className,
  title,
  link,
  projectsLink,
  description,
  technologies,
}) => {
  // List of icons that have a wordmark version on https://devicon.dev/
  const iconWithWordmark = [
    "html5",
    "css3",
    "jquery",
    "mysql",
    "bootstrap",
    "git",
    "apache",
    "axios",
    "react",
    "filezilla",
    "trello",
    "reactrouter",
    "puppeteer",
    "vitejs",
    "tailwindcss",
  ];

  return (
    <section className={className}>
      <div className="outer">
        <div className="inner">
          <div className="bg">
            <h2 className="section-heading">{title}</h2>
            <p className="project-description">{description}</p>
            <div className="project-tech">
              {technologies &&
                technologies.map((tech, index) => (
                  <i
                    key={index}
                    className={`devicon-${tech}-${
                      iconWithWordmark.includes(tech)
                        ? "plain-wordmark"
                        : "plain"
                    } colored project-tech-icon`}
                  ></i>
                ))}
            </div>
            <div className="project-link-container">
              <a
                className="project-link"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {projectsLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
