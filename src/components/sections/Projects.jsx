import { useState } from "react";
import { ReliefCard } from "../ReliefCard";
import { ReliefTitle } from "../ReliefTitle";
import projects from "../../data/projects.json";
import Modal from "../Modal";

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
            className="w-[360px] h-[400px]"
          />
        ))}
      </div>

      <Modal isOpen={open} onClose={closeProject} title={selectedProject?.title ?? "Détails du projet"}>
        {selectedProject && (
          <div className="flex">
            
            {/* visuel */}
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-3/5 max-h-auto object-contain rounded-lg border-2 border-black"
                draggable={false}
              />
            )}
            
            <div className="ml-6 flex flex-col gap-4 w-2/5">

              {/* titre */}
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>

              {/* description */}
              {selectedProject.description && (
                <p className="text-[var(--main-text-color)]">{selectedProject.description}</p>
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
                  <div className="relative z-10 rounded-lg border-2 border-black bg-white px-4 mr-6 py-3">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-4">
                      {selectedProject.stack.map((tech) => {
                        const Icon = techIcon[tech];
                        return (
                          <li key={tech} className="flex flex-col items-center text-center">
                            {Icon ? (
                              <Icon className="text-2xl shrink-0" />
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


              {/* actions */}
              <div className="flex gap-3 pt-2">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank" rel="noreferrer"
                    className="px-3 py-2 border-2 border-black rounded-lg bg-[var(--primary-color)] font-semibold"
                  >
                    Demo
                  </a>
                )}
                {selectedProject.repoUrl && (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank" rel="noreferrer"
                    className="px-3 py-2 border-2 border-black rounded-lg bg-white font-semibold"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
