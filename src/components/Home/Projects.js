import { useTheme } from "@hooks/ThemeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectSection from "@components/Projects/ProjectSection";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { language } = useTheme();
  const projectsTitle = language === "en" ? "Achievements" : "Réalisations";
  const projectsLink =
    language === "en" ? "Click to view" : "Cliquer pour voir";

  const projectsDesc = {
    project1: {
      en: "Custom website design for a company specializing in the repair and resale of used vehicles",
      fr: "Création d’un site web sur mesure pour une entreprise spécialisée dans la réparation et la revente de véhicules d’occasion",
    },
    project2: {
      en: "Development of a platform for an organization offering educational training adapted to the needs of learners",
      fr: "Développement d’une plateforme pour un organisme proposant des formations pédagogiques adaptée aux besoins des apprenants",
    },
    project3: {
      en: "Design of a modern showcase website for a digital marketing agency",
      fr: "Conception d'un site vitrine moderne pour une agence spécialisée en marketing digital",
    },
    project4: {
      en: "Website creation for a non-profit organization dedicated to mountain and environmental conservation",
      fr: "Création d’un site web pour une association à but non lucratif dédiée à la protection de la montagne et de l'environnement",
    },
    project5: {
      en: "Development of an interactive educational website for learning the names of countries, their flags, and major cities around the world",
      fr: "Développement d’un site pédagogique interactif pour l’apprentissage des noms des pays, de leurs drapeaux et des principales villes du monde",
    },
    project6: {
      en: "...",
      fr: "...",
    },
  };

  useGSAP(() => {
    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      headings = document.querySelectorAll(".section-heading"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating;

    // Browse each title
    headings.forEach((heading) => {
      // Split the title into characters
      let chars = heading.textContent.split("");

      // Wrap each character in a span
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
      target: ".projects-container",
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
        <h1 className="my-projects-title">{projectsTitle}</h1>
        <div className="projects-container">
          <ProjectSection loading="lazy" className="first" title="" />

          {/* - Garage Parrot - */}
          <ProjectSection
            loading="lazy"
            className="second"
            title="Garage Parrot"
            link="http://garageparrot.les-amis-de-la-montagne.go.yj.fr"
            projectsLink={projectsLink}
            description={projectsDesc.project1[language]}
            technologies={[
              "figma",
              "trello",
              "html5",
              "css3",
              "javascript",
              "jquery",
              "php",
              "mysql",
              "bootstrap",
              "npm",
              "git",
              "apache",
              "filezilla",
            ]}
          />

          {/* - Andragogy - */}
          <ProjectSection
            loading="lazy"
            className="third"
            title="Andragogy"
            link="https://andragogy.fr/"
            projectsLink={projectsLink}
            description={projectsDesc.project2[language]}
            technologies={[
              "figma",
              "trello",
              "html5",
              "css3",
              "sass",
              "javascript",
              "react",
              "vitejs",
              "axios",
            ]}
          />

          {/* - Web Agency - */}
          <ProjectSection
            loading="lazy"
            className="fourth"
            title="Web Agency"
            link="https://devakev.github.io/Web-Agency/"
            projectsLink={projectsLink}
            description={projectsDesc.project3[language]}
            technologies={["figma", "trello", "html5", "css3"]}
          />

          {/* - Asso / Les amis de la montagne - */}
          <ProjectSection
            loading="lazy"
            className="fifth"
            title="Les amis de la montagne"
            link="https://devakev.github.io/les.amis.de.la.montagne.fr/"
            projectsLink={projectsLink}
            description={projectsDesc.project4[language]}
            technologies={["figma", "trello", "html5", "css3"]}
          />

          {/* - Countries & Flags app  - */}
          <ProjectSection
            loading="lazy"
            className="sixth"
            title="Drapeaux du Monde"
            link="https://devakev.github.io/REACT-APP-COUNTRIES1/"
            projectsLink={projectsLink}
            description={projectsDesc.project5[language]}
            technologies={[
              "figma",
              "trello",
              "html5",
              "css3",
              "react",
              "axios",
              "reactrouter",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
