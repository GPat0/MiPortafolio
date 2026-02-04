"use client";
import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";

export default function Projects() {
  const { lang } = useLang();
  
  const projs = [
    { 
      title: "LCS Staffing Admin", 
      tags: ["React Native", "Firebase", "Expo"], 
      desc: { es: "Panel de administración móvil para gestión de personal en tiempo real.", en: "Mobile admin panel for real-time staff management." },
      size: "large" // Esta ocupará más espacio
    },
    { 
      title: "Copa Frisa App", 
      tags: ["Swift", "iOS", "API"], 
      desc: { es: "App oficial para torneos deportivos.", en: "Official app for sports tournaments." },
      size: "small"
    },
    { 
      title: "AI Finance Assistant", 
      tags: ["Next.js", "OpenAI", "Tailwind"], 
      desc: { es: "Asistente inteligente de finanzas.", en: "Intelligent finance assistant." },
      size: "small"
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-black orange-gradient italic uppercase tracking-tighter mt-2">
            {lang === 'en' ? "Selected Projects" : "Proyectos Selectos"}
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs text-right italic">
          {lang === 'en' ? "Focusing on performance and clean UI." : "Enfocado en rendimiento y UI limpia."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projs.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`glass-card p-8 min-h-[400px] flex flex-col justify-end group relative overflow-hidden ${
              p.size === "large" ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            {/* Efecto de luz interna al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Círculo de luz decorativo */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/5 blur-[80px] group-hover:bg-orange-500/10 transition-colors" />

            <div className="relative z-10">
              <div className="flex gap-2 mb-6">
                {p.tags.map(t => (
                  <span key={t} className="text-[9px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full text-orange-400">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-4xl font-black text-white mb-4 tracking-tighter group-hover:orange-gradient transition-all">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                {p.desc[lang]}
              </p>
              
              <div className="flex gap-4">
                <button className="text-white font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-colors">
                  Demo
                </button>
                <button className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-transparent pb-1 hover:border-white hover:text-white transition-all">
                  Code
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}