import { motion } from "framer-motion";
import { ReliefTitle } from "./ReliefTitle";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Timeline({
  items = [],
  title = "",
  className = "",
}) {
  // Compteur d'items "event" pour l'alternance (les "divider" ne comptent pas)
  let eventIndex = -1;

  return (
    <section
      id="timeline"
      className={`relative mx-auto max-w-4xl px-4 py-12 ${className}`}
    >
      <ReliefTitle className="mb-8 mt-8">
        <h2 className="text-xl font-bold">{title}</h2>
      </ReliefTitle>

      {/* Ligne verticale */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute top-48 h-[calc(100%-12rem)] w-px bg-black/20
          left-1/2 -translate-x-1/2
        "
      />

      <ul className="relative space-y-10 md:space-y-16">
        {items.map((item, idx) => {
          // --- Divider (ne compte pas pour l'alternance)
          if (item.type === "divider") {
            return (
              <li key={idx} className="flex items-center justify-center md:justify-start my-0 md:-translate-y-6 -translate-y-4">
                <span className="relative z-10 px-3 text-sm font-medium text-gray-600 bg-white rounded-full border-2 border-black/20 shadow">
                  {item.comment}
                </span>
                <span aria-hidden className="absolute w-1/2 h-px bg-black/20 hidden md:block" />
              </li>
            );
          }

          // --- Event : on incrémente le compteur et on calcule l'alternance
          eventIndex += 1;
          const isRight = eventIndex % 2 === 1;

          return (
            <li key={idx} className="relative">
              {/* Dot sur la ligne */}
              <span
                aria-hidden
                className="
                  absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-black bg-white shadow
                  md:left-1/2 md:-translate-x-1/2
                "
              />

              <motion.div
                custom={eventIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
                className="md:grid md:grid-cols-2 md:gap-8"
              >
                <div
                  className={`${
                    isRight
                      ? "md:col-start-1 md:pr-10"
                      : "md:col-start-2 md:pl-10"
                  }`}
                >
                  <div className="relative">
                    <article
                      className="
                        relative z-10 rounded-xl border-2 border-black bg-white p-4 shadow
                        transition-transform duration-200 hover:-translate-y-0.5
                      "
                    >
                      <header className="mb-2 flex items-center justify-between gap-2">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        {item.badge ? (
                          <span className="whitespace-nowrap rounded-full border-2 border-black px-2 py-0.5 text-xs font-semibold">
                            {item.badge}
                          </span>
                        ) : null}
                      </header>

                      {(item.org || item.location) && (
                        <p className="mb-2 text-sm text-gray-700">
                          {item.org}
                          {item.org && item.location ? " • " : ""}
                          {item.location}
                        </p>
                      )}

                      {item.description && (
                        <p className="text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      <footer className="mt-3 text-xs font-semibold">
                        {item.date}
                      </footer>
                    </article>

                    {/* Ombre relief */}
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute inset-0 translate-x-2 translate-y-2
                        rounded-xl border-2 border-black bg-[var(--main-bg-color)]
                      "
                    />
                  </div>
                </div>

                {/* Colonne vide opposée pour créer l'alternance sur desktop */}
                <div className="hidden md:block" />
              </motion.div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
