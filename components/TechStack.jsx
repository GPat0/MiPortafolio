"use client";
import { motion } from "framer-motion";

const techs = [
  { name: "Python", slug: "python", color: "3776AB", text: "#6cc3ff" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E", text: "#f5d030" },
  { name: "Vue.js", slug: "vuedotjs", color: "4FC08D", text: "#54d29a" },
  { name: "React", slug: "react", color: "61DAFB", text: "#66d9ff" },
  { name: "Node.js", slug: "nodedotjs", color: "339933", text: "#56c26a" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF", text: "#f59e0b" },
  { name: "Azure", slug: "", color: "0078D4", text: "#4aa3ff" },
  { name: "Swift", slug: "swift", color: "F05138", text: "#ff7a4d" },
  { name: "HTML", slug: "html5", color: "E34F26", text: "#ff7a4d" },
  { name: "CSS", slug: "css", color: "1572B6", text: "#4aa3ff" },
];

export default function TechStack() {
  return (
    <section className="tech-section">
      <div className="tech-header">
        <h2 className="tech-title">Stack Tecnológico</h2>
        <p className="tech-subtitle">
          Tecnologías y herramientas he utilizado para crear experiencias digitales excepcionales
        </p>
      </div>
      <div className="tech-grid">
        {techs.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            whileHover={{
              y: -6,
              boxShadow: "0 0 0 1px rgba(90,140,255,0.35), 0 18px 40px rgba(0,0,0,0.5)",
            }}
            className="tech-card"
            style={{ "--tech-glow": t.text }}
          >
            <div className="tech-icon-wrap">
              {t.slug ? (
                <img
                  className="tech-icon"
                  src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                  alt={`${t.name} logo`}
                  loading="lazy"
                />
              ) : null}
            </div>
            <p className="tech-name" style={{ color: t.text }}>
              {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
