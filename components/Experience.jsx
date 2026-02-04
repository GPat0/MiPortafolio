"use client";
import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";

const steps = [
  {
    date: "2021",
    title: { en: "Computer Engineering", es: "Inicio de Carrera" },
    desc: {
      en: "Started Computer Technologies Engineering at Tecnológico de Monterrey.",
      es: "Empecé la carrera de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey.",
    },
    tags: ["Tec de Monterrey", "Ingeniería", "ITC"],
    icon: "rocket",
  },
  {
    date: "2023",
    title: { en: "Swift iOS Project", es: "Proyecto iOS en Swift" },
    desc: {
      en: "Developed an intuitive iOS app for a Frisa tournament with registration, access control, rankings and match stats.",
      es: "Desarrollé una app iOS para un torneo de Frisa con registro, control de acceso, rankings, goles y más funcionalidades del torneo.",
    },
    tags: ["Swift", "iOS", "Frisa"],
    icon: "cap",
  },
  {
    date: "2024",
    title: { en: "Telegram Chatbot", es: "Chatbot en Telegram" },
    desc: {
      en: "Built a Telegram chatbot with Java for automation and messaging flows.",
      es: "Desarrollé un chatbot en Telegram con Java para automatizar flujos y mensajería.",
    },
    tags: ["Java", "Telegram", "Bot"],
    icon: "rocket",
  },
  {
    date: "2025",
    title: { en: "Swift iOS Hackathon", es: "Hackathon Swift iOS" },
    desc: {
      en: "Participated in a Swift iOS hackathon building a mobile solution.",
      es: "Participé en un hackathon de Swift iOS construyendo una solución móvil para un problematica.",
    },
    tags: ["Swift", "iOS", "Hackathon"],
    icon: "cap",
  },
  {
    date: "2025",
    title: { en: "Hackathon MTY", es: "Hackathon MTY" },
    desc: {
      en: "Competed in a Monterrey hackathon focused on rapid prototyping.",
      es: "Participé en un hackathon en Monterrey enfocado en prototipado rápido.",
    },
    tags: ["Hackathon", "Monterrey", "Team"],
    icon: "rocket",
  },
  {
    date: "2025",
    title: { en: "Frontend Developer", es: "Frontend Developer" },
    desc: {
      en: "Started working at a tech company as a frontend developer.",
      es: "Comencé a trabajar en una empresa de tecnología como desarrollador frontend.",
    },
    tags: ["Frontend", "Empresa", "Trabajo"],
    icon: "cap",
  },
  {
    date: "2025",
    title: { en: "Graduation", es: "Fin de Carrera" },
    desc: {
      en: "Completed my university degree.",
      es: "Terminé mi carrera universitaria.",
    },
    tags: ["Graduación", "ITC"],
    icon: "rocket",
  },
];

export default function Experience() {
  const { lang } = useLang();
  return (
    <section className="journey-section">
      <div className="journey-header">
        <span className="journey-kicker">Timeline</span>
        <h2 className="journey-title">{lang === "en" ? "My Journey" : "Mi Trayectoria"}</h2>
        <p className="journey-subtitle">
          {lang === "en"
            ? "The path that brought me here — from first steps to professional growth."
            : "El camino que me trajo hasta aquí de los primeros pasos al crecimiento profesional."}
        </p>
      </div>

      <div className="journey-line" />

      <div className="journey-list">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`journey-item ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="journey-node">
              {s.icon === "rocket" ? (
                <svg className="journey-node-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 4l6 6-6 6-6-6 6-6Z" />
                  <path d="M12 10l-7 7" />
                </svg>
              ) : (
                <svg className="journey-node-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6l9-4 9 4-9 4-9-4Z" />
                  <path d="M7 10v4c0 1.5 3 3 5 3s5-1.5 5-3v-4" />
                </svg>
              )}
            </div>

            <div className="journey-card">
              <span className="journey-year">{s.date}</span>
              <h3 className="journey-card-title">{s.title[lang]}</h3>
              <p className="journey-card-desc">{s.desc[lang]}</p>
              <div className="journey-tags">
                {s.tags.map((t) => (
                  <span key={t} className="journey-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
