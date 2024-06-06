import { useTheme } from "../../hooks/ThemeContext";
// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { language } = useTheme();
  const projectsTitle = language === "en" ? "My Projects" : "Mes Projets";
  const projectsLink = language === "en" ? "See the site" : "Voir le site";
  const projectsScroll = language === "en" ? "⬆️SCROLL⬇️" : "⬆️Défilez⬇️";
  // const container = useRef();

  useGSAP(() => {
    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      headings = document.querySelectorAll(".section-heading"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating;

    // Parcourez chaque titre
    headings.forEach((heading) => {
      // Divisez le texte du titre en caractères individuels
      let chars = heading.textContent.split("");

      // Enveloppez chaque caractère dans un élément span
      heading.innerHTML = chars
        .map(
          (char) =>
            `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");
    });

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => (animating = false),
        });
      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      )
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          sections[index].querySelectorAll(".char"),
          {
            autoAlpha: 0,
            yPercent: 100,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: 0.05,
          }
        );

      currentIndex = index;
    }

    ScrollTrigger.observe({
      target: ".section-wrap",
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  });

  return (
    <>
      <div id="projets" className="page-content">
        {/* ref={container} */}
        <div className="projects-container">
          {/* <div className="section-wrap"> */}
          <header className="projects-header">
            <h1 className="my-projects-title">{projectsTitle}</h1>
            <div>
              <a className="project-link" href="/">
                {projectsLink}
              </a>
            </div>
          </header>
          <section className="first">
            <div className="outer">
              <div className="inner">
                <div className="bg one">
                  <h2 className="section-heading">{projectsScroll}</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="second">
            <div className="outer">
              <div className="inner">
                <div className="bg">
                  <h2 className="section-heading">Garage Parrot</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="third">
            <div className="outer">
              <div className="inner">
                <div className="bg">
                  <h2 className="section-heading">Andragogy</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="fourth">
            <div className="outer">
              <div className="inner">
                <div className="bg">
                  <h2 className="section-heading">Projet 3</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="fifth">
            <div className="outer">
              <div className="inner">
                <div className="bg">
                  <h2 className="section-heading">Projet 4</h2>
                </div>
              </div>
            </div>
          </section>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
// ########################################################
// ##### TODO : Nettoyer le code, modifier les images des projets et les liens #####
// ########################################################

// import { useEffect} from "react";
// import { useTheme } from "../../hooks/ThemeContext";
// import garageParrotImg from "../../assets/images/projectsImages/img-Garage-Parrot.png";
// import posterImg from "../../assets/images/projectsImages/poster.png";
// import projectImg3 from "../../assets/images/projectsImages/screen-cat1.png";
// // import { gsap } from "gsap";

// const Projects = () => {
//   const { language } = useTheme();
//   const projectsTitle = language === "en" ? "My Projects" : "Mes Projets";

//   const projects = [
//     {
//       title: "Garage Parrot",
//       description:
//         "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
//       technologies: ["html5", "css3", "javascript", "jquery", "php", "mysql"],
//       poster: garageParrotImg,
//       link: "google.com",
//     },
//     {
//       title: "Andragogy",
//       description:
//         "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
//       technologies: ["react", "nodejs", "mongodb"],
//       poster: posterImg,
//       link: "google.com",
//     },
//     {
//       title: "Project 3",
//       description:
//         "Projet de fin de formation, site web de gestion d'un garage et revente de véhicules d'occasion.",
//       technologies: ["python", "django", "postgresql"],
//       poster: projectImg3,
//       link: "google.com",
//     },
//   ];

//   return (
//     <section className="projects-section">
//       <h1 id="projets" className="my-projects-title">
//         {projectsTitle}
//       </h1>
//       <div className="projects-list">
//         {projects.map((project, index) => (
//           <div key={index} className="project">
//             <h4 className="project-title">{project.title}</h4>
//             <p className="project-description">{project.description}</p>
//             <div className="project-tech">
//               {project.technologies.map((tech, techIndex) => (
//                 <i
//                   key={techIndex}
//                   className={`devicon-${tech}-plain project-tech-icon`}
//                 ></i>
//               ))}
//             </div>
//             <div className="project-preview">
//               <img id="imgProjects" src={project.poster} alt={project.title} />
//               <a
//                 className="project-link"
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Voir le projet
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
