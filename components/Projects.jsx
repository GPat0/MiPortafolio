"use client";
import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";

export default function Projects() {
  const { lang } = useLang();

  const projs = [
    {
      title: "Dashboard of Data Analytics",
      tags: ["Dashboard", "Analytics", "Data"],
      desc: {
        es: "Panel interactivo para visualizar métricas clave, tendencias y desempeño del negocio en tiempo real.",
        en: "Interactive dashboard to visualize key metrics, trends, and business performance in real time.",
      },
      image: "/projects/dashboard/dashboard.jpg",
      size: "large",
      accent: "#7dd3fc",
      codeUrl: "https://github.com/GPat0/AnalisisDeDatos",
      demoUrl: "",
    },
    {
      title: "Omnia — Virtual Financial Assistant",
      tags: ["React", "Express", "Gemini", "ElevenLabs"],
      desc: {
        es: "Asistente financiero con avatar conversacional que ayuda a presupuestar, categorizar gastos y dar recomendaciones en tiempo real.",
        en: "Financial assistant with a conversational avatar that helps budget, categorize expenses, and give real-time recommendations.",
      },
      image: "/projects/asistentevirtual/asistentevirtual.png",
      size: "small",
      accent: "#a78bfa",
      codeUrl: "https://github.com/jose-oliva/finance_assistant",
      demoUrl: "https://www.youtube.com/watch?v=WNzT-dbYEe4",
    },
    {
      title: "EcoHaus — Hackathon Swift iOS",
      tags: ["Swift", "iOS", "Hackathon"],
      desc: {
        es: "Solución para identificar riesgos por calor, encontrar espacios seguros y tomar decisiones informadas en la ciudad.",
        en: "Solution to identify heat risks, find safe spaces, and make informed decisions in the city.",
      },
      image: "/projects/ios-swift/ios-swift.jpeg",
      size: "small",
      accent: "#fb923c",
      codeUrl: "https://github.com/GPat0/Swift_Hack",
      demoUrl: "https://www.youtube.com/watch?v=eW4fIPdvLtg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <span className="text-orange-500 font-mono text-sm tracking-widest uppercase block mb-2">
          Portfolio
        </span>
        <h2 className="text-5xl md:text-6xl font-black orange-gradient italic uppercase tracking-tighter">
          {lang === "en" ? "Selected Projects" : "Proyectos Selectos"}
        </h2>
        <p className="text-white/90 text-sm mt-4 max-w-2xl mx-auto">
          {lang === "en"
            ? "Focusing on performance and clean UI."
            : "Enfocado en rendimiento y UI limpia."}
        </p>
      </div>

      <div className="projects-grid">
        {projs.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`project-card ${p.size} glass-card p-8 flex flex-col justify-end group relative overflow-hidden z-10`}
            style={{ "--accent": p.accent }}
          >
            <div
              className="project-bg"
              style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}
              aria-hidden="true"
            />
            <div className="project-overlay" aria-hidden="true" />
            <div className="project-glow" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-black uppercase tracking-widest bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-4xl font-black text-white mb-4 tracking-tighter group-hover:orange-gradient transition-all">
                {p.title}
              </h3>
              <p className="text-white/85 text-sm leading-relaxed mb-8 max-w-xl">
                {p.desc[lang]}
              </p>

              <div className="flex gap-4">
                {p.codeUrl && (
                  <a
                    className="project-action"
                    href={p.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="project-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img">
                        <path
                          fill="currentColor"
                          d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.8.8 1.8.3 1 .9 1.3 1.6 1.4.1-.7.4-1.3.7-1.6-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.4 1.1-3.3-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.4-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.9 1.1 2 1.1 3.3 0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"
                        />
                      </svg>
                    </span>
                    Code
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    className="project-action primary"
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="project-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img">
                        <path
                          fill="currentColor"
                          d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3ZM5 5h7v2H7v10h10v-5h2v7H5V5Z"
                        />
                      </svg>
                    </span>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
