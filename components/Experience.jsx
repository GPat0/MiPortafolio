"use client";
import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";

const steps = [
  {
    date: "2024",
    title: { en: "Swift Hackathon Winner", es: "Ganador Swift Hackathon" },
    desc: { en: "2nd place at Tec de Monterrey hackathon.", es: "2do lugar en el hackathon del Tec de Monterrey." },
    tags: ["Swift", "Mobile", "Winner"]
  },
  {
    date: "2023",
    title: { en: "Copa Frisa Project", es: "Proyecto Copa Frisa" },
    desc: { en: "Developed a management system for real-world partner.", es: "Desarrollé un sistema de gestión para socio formador." },
    tags: ["iOS", "Full Stack", "SwiftUI"]
  }
];

export default function Experience() {
  const { lang } = useLang();
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <span className="text-orange-500 font-mono text-sm tracking-[0.3em] uppercase">Timeline</span>
        <h2 className="text-5xl md:text-6xl font-black mt-4 orange-gradient uppercase italic">
          {lang === 'en' ? "My Journey" : "Mi Trayectoria"}
        </h2>
      </div>

      <div className="relative border-l-2 border-white/5 ml-4 md:ml-10">
        {steps.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20 ml-12 relative"
          >
            {/* El punto naranja con brillo tipo Diego */}
            <div className="absolute -left-[59px] top-1 w-7 h-7 bg-orange-500 rounded-full border-[6px] border-[#050505] shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
            
            <div className="glass-card p-8 rounded-[2rem] inline-block max-w-2xl w-full">
              <span className="text-orange-500 font-mono font-bold text-sm bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                {s.date}
              </span>
              <h3 className="text-3xl font-black mt-4 text-white tracking-tight">{s.title[lang]}</h3>
              <p className="text-gray-400 mt-3 text-lg leading-relaxed">{s.desc[lang]}</p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {s.tags.map(t => (
                  <span key={t} className="text-[10px] bg-white/5 px-3 py-1 rounded-lg text-orange-300 border border-white/10 font-bold uppercase tracking-widest">
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