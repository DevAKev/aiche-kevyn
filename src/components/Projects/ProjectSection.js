const ProjectSection = ({ className, title, link, projectsLink }) => (
  <section className={className}>
    <div className="outer">
      <div className="inner">
        <div className="bg">
          <h2 className="section-heading">{title}</h2>
          <div className="project-link-container">
            <a className="project-link" href={link} rel="noopener noreferrer">
              {projectsLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectSection;
