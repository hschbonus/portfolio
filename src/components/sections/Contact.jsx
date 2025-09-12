import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 flex flex-col items-center bg-white border-t-2 border-b-2 border-black shadow-md"
    >
      <h2 className="text-xl font-bold mb-6">CONTACT</h2>

      <div className="flex gap-8">
        <a
          href="mailto:h.schmidt@hotmail.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:scale-110 transition-transform"
          aria-label="Envoyer un email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/herveschmidt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:scale-110 transition-transform"
          aria-label="Mon LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/hschbonus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:scale-110 transition-transform"
          aria-label="Mon GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-600">
        © {new Date().getFullYear()} Hervé Schmidt. Merci pour votre visite !
      </p>
    </section>
  );
};
