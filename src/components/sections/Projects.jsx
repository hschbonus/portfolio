import { ReliefCard } from "../ReliefCard";
import { ReliefTitle } from "../ReliefTitle";
import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section id="projects" className="flex-col items-center justify-center py-20">

      <ReliefTitle>
        <h2 className="text-xl font-bold">MES PROJETS</h2>
      </ReliefTitle>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-14 max-w-4xl mx-auto px-3 py-4 mt-8 justify-items-center">

        {projects.map((project, index) => (
          <ReliefCard
            key={index}
            img={project.image}
            hoverImg={project.hoverImage}
            title={project.title}
          />

        ))}
      </div>
    </section>
  );
};
