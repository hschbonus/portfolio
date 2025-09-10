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

      <ReliefTitle className="mb-4 mt-8">
        <h2 className="text-xl font-bold">MES COMPETENCES</h2>
      </ReliefTitle>

      <Toggle onLabel="FRONT-END" offLabel="BACK-END" />

          <div className="mt-8">
            {/* compétences techniques */}
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {frontendSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        




            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - XYZ University
                  (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at ABC Corp (2020 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
};