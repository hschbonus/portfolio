import { ReliefTitle } from "../ReliefTitle";
import { Toggle } from "../Toggle";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "React",
  ];

  const backendSkills = [
    "Node.js", 
    "Express", 
    "MongoDB", 
  ];

  return (
    <section
      id="about"
      className="max-w-4xl flex-col items-center justify-center relative mx-auto px-4 py-20"
    >
      <ReliefTitle>
        <h2 className="text-xl font-bold">A PROPOS</h2>
      </ReliefTitle>

      <div className="rounded-xl pt-10 border-white/10 border">
        <p className="text-lg md:text-xl text-[var(--main-text-color)] text-center">
          Passionné par le numérique, je conçois et développe des solutions web alliant créativité et efficacité. 
          J’accorde une attention particulière à l’expérience utilisateur et aux détails visuels, pour donner vie à des projets modernes et intuitifs. 
          Plus qu’un simple développement, je propose un accompagnement personnalisé pour transformer vos idées en projets concrets et pérennes. 
          Curieux et polyvalent, je cherche toujours à progresser et à relever de nouveaux défis. <br/>Bienvenue sur mon portfolio !
        </p>
      </div>

    </section>
  );
};