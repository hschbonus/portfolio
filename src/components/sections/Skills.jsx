import { useState } from "react";
import { ReliefTitle } from "../ReliefTitle";
import { Toggle } from "../Toggle";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss
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
  Tailwind: SiTailwindcss
};

export const Skills = () => {
  const [showBackend, setShowBackend] = useState(false);
  const [fade, setFade] = useState(true);

  const frontendSkills = ["HTML", "CSS", "JavaScript", "Sass", "Tailwind", "React"];
  const backendSkills = ["Nodejs", "Express", "MongoDB"];

  const skills = showBackend ? backendSkills : frontendSkills;

  const handleToggle = (value) => {
    setFade(false); // démarre fade-out
    setTimeout(() => {
      setShowBackend(value);
      setFade(true); // déclenche fade-in
    }, 200); // durée du fade-out
  };

  return (
    <section
      id="skills"
      className="max-w-4xl flex flex-col gap-10 items-center justify-center relative mx-auto px-4 py-20"
    >
      <ReliefTitle className="mb-4 mt-8">
        <h2 className="text-xl font-bold">MES COMPÉTENCES</h2>
      </ReliefTitle>

      <Toggle onLabel="BACK-END" offLabel="FRONT-END" onToggle={handleToggle} />


      <ul
        className={`flex flex-wrap gap-6 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {skills.map((skill) => {
          const Icon = techIcon[skill];
          return (
            <li
              key={skill}
              className="flex flex-col items-center justify-center p-3 border-2 border-black rounded-lg bg-white shadow-md"
              title={skill}
            >
              {Icon ? (
                <Icon className="text-4xl" />
              ) : (
                <span className="text-sm font-semibold">{skill}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
