import { useState } from "react";
import { ReliefCard } from "../ReliefCard";
import { ReliefTitle } from "../ReliefTitle";
import { ReliefButtonSm } from "../ReliefButtonSm";
import Carrousel from "../Carrousel";
import { projects } from "../../data/projects";
import Modal from "../Modal";
import { FaGithub } from "react-icons/fa";


import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { ReliefButton } from "../ReliefButton";

export const techIcon = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  React: SiReact,
  Sass: SiSass,
  Nodejs: SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
};


export const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const closeProject = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="flex-col items-center justify-center py-20">
      <ReliefTitle>
        <h2 className="text-xl font-bold">MES PROJETS</h2>
      </ReliefTitle>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-14 max-w-4xl mx-auto px-3 py-4 mt-8 justify-items-center">
        {projects.map((project, index) => (
          <ReliefCard
            key={project.id ?? index}
            img={project.image}
            hoverImg={project.hoverImage}
            title={project.title}
            onClick={() => openProject(project)}
            className="w-[300px] h-[350px] sm:w-[360px] sm:h-[400px]"
          />
        ))}
      </div>

     <Modal isOpen={open} onClose={closeProject} title={selectedProject?.title ?? "Détails du projet"}>
      {selectedProject && (
        <div className="md:flex gap-6">

          <div id="modal-carousel" className="md:w-3/5 flex items-center justify-center">
          {/* visuel */}
          {(() => {
            const imgs =
              (selectedProject.imagesCarrousel && selectedProject.imagesCarrousel.length)
                ? selectedProject.imagesCarrousel
                : [selectedProject.image, selectedProject.hoverImage].filter(Boolean);

            return imgs.length ? (
              <Carrousel
                images={imgs}
                alt={selectedProject.title}
              />
            ) : null;
          })()}
          </div>

          <div id="modal-infos" className="md:w-2/5 flex flex-col gap-2 md:gap-8 mt-2 md:mt-0">

            <div className="flex gap-3 items-center">
              {/* titre */}
              <h3 className="text-lg md:text-3xl font-extrabold text-[var(--main-text-color)] ">{selectedProject.title}</h3>
              <a 
                href={selectedProject.githubLink}>
                <FaGithub className="ml-2 inline-block md:hidden" /></a>
            </div>

            {/* description */}
            {selectedProject.description && (
              <p className="text-xs md:text-base text-[var(--main-text-color)]">{selectedProject.description}</p>
            )}

            {/* stack */}
            {Array.isArray(selectedProject.stack) && selectedProject.stack.length > 0 && (
              <div className="relative inline-block">
                {/* shadow */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 translate-x-[10px] translate-y-[10px] rounded-lg border-2 border-black bg-[var(--main-bg-color)] mr-6"
                />

                {/* carte principale */}
                <div className="relative z-10 rounded-lg border-2 border-black bg-white px-4 mr-6 py-1 md:py-3">
                  <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-4">
                    {selectedProject.stack.map((tech) => {
                      const Icon = techIcon[tech];
                      return (
                        <li key={tech} className="flex flex-col items-center text-center">
                          {Icon ? (
                            <Icon className="text-sm md:text-2xl shrink-0" />
                          ) : (
                            <span className="text-sm font-semibold">•</span>
                          )}
                          <span className="mt-3 text-xs uppercase">
                            {tech}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}

            <ReliefButton 
              width='120'
              href={selectedProject.githubLink}
              className="md:mt-0 mt-2 self-start !hidden md:!inline-flex"
            >
              Voir le code <FaGithub className="ml-2 inline-block" />
            </ReliefButton>
          </div>
        </div>
      )}
    </Modal>
  </section>
);
};
