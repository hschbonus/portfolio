import { ReliefTitle } from "../ReliefTitle";
import { Toggle } from "../Toggle";

export const Skills = () => {
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
      className="max-w-4xl h-[800px] flex-col items-center justify-center relative mx-auto px-4 py-4"
    >
      <ReliefTitle>
        <h2 className="text-xl font-bold">QUI SUIS-JE ?</h2>
      </ReliefTitle>

        <div className="rounded-xl p-12 border-white/10 border">
          <p className="text-xl text-gray-700 text-center">
            Passionné par le numérique, je conçois et développe des solutions web alliant créativité et efficacité. 
            J’accorde une attention particulière à l’expérience utilisateur et aux détails visuels, pour donner vie à des projets modernes et intuitifs. 
            Plus qu’un simple développement, je propose un accompagnement personnalisé pour transformer vos idées en projets concrets et pérennes. 
            Curieux et polyvalent, je cherche toujours à progresser et à relever de nouveaux défis. <br/>Bienvenue sur mon portfolio !
          </p>
        </div>

      <ReliefTitle className="mb-4 mt-8">
        <h2 className="text-xl font-bold">MES COMPETENCES</h2>
      </ReliefTitle>

      <Toggle onLabel="FRONT-END" offLabel="BACK-END" />

    </section>
  );
};