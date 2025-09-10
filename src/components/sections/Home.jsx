import { ReliefButton } from "../ReliefButton";
import { LoadingText } from "../LoadingText";

export const Home = () => {
  return (
    <section id="home" className="max-w-4xl h-[800px] flex items-center justify-center relative mx-auto px-4">
        <div className="flex h-[300px] w-full gap-8 justify-center items-center">
          <img src="/src/assets/default.jpg" alt="me." className="h-full w-auto border-2 border-black rounded-2xl" />
          <div className="flex flex-col max-w-[400px] h-full justify-between">
            <LoadingText
              text="<Hello, je suis Hervé/>"
              speed={80}
              startDelay={200}
              className="text-center"
            />
            <div className="gap-4 flex flex-col justify-end items-start pb-2">
              <p className="mt-4 mb-6 text-xl text-[var(--main-text-color)] text-left text-lg">
                Développeur web, je crée des sites modernes et performants pour valoriser votre activité en ligne.
              </p>

              <div className="flex gap-8">
                <ReliefButton href="#projects" width={180} height={48}>
                  Mes projets
                </ReliefButton>
                <ReliefButton href="#contact" width={180} height={48}>
                  Me contacter
                </ReliefButton>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
