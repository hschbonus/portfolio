import { ReliefButton } from "../ReliefButton";
import { LoadingText } from "../LoadingText";
import profil from '../../assets/profil.jpg'

export const Home = () => {
  return (
    <section id="home" className="max-w-4xl h-[600px] flex items-end justify-center relative mx-auto px-4 py-20">
        <div className="flex h-[300px] w-full gap-8 justify-center items-center">
          <img src={profil} alt="me." className="h-full w-auto border-2 border-black hidden md:block rounded-2xl max-md:scale-50" />
          <div className="flex flex-col max-w-[400px] h-full justify-between">
            <LoadingText
              text="<Hello, je suis Hervé/>"
              speed={80}
              startDelay={200}
              className="text-center"
            />
            <p className="mt-4 mb-6 text-lg md:text-xl text-[var(--main-text-color)] text-left">
              Développeur web, je crée des sites modernes et performants pour valoriser votre activité en ligne.
            </p>

            <div className="flex flex-wrap gap-8">
              <ReliefButton href="#projects" width={180} height={48}>
                Mes projets
              </ReliefButton>
              <ReliefButton href="#contact" width={180} height={48}>
                Me contacter
              </ReliefButton>
            </div>
          </div>
        </div>
    </section>
  );
};
