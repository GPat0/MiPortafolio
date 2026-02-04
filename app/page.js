"use client";
import { LanguageProvider, useLang } from "../components/LanguageContext";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import BackgroundCanvas from "../components/BackgroundCanvas";

// Este es el contenido que usa el idioma
function MainContent() {
  const { lang, toggleLang } = useLang();

  return (
    <main className="min-h-screen bg-[#050505]">
      <BackgroundCanvas />
      
      {/* 1. SECCIÓN HERO: Fondo con ligero tinte gris oscuro */}
      <section className="relative bg-[#0a0a0a] border-b border-white/5">
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-8 backdrop-blur-md">
          <div className="text-2xl font-black italic">GAEL<span className="text-orange-500">.</span></div>
          <button onClick={toggleLang} className="glass-card px-6 py-2 rounded-full text-[10px] font-bold">
            {lang === 'es' ? "EN" : "ES"}
          </button>
        </nav>
        <Hero />
      </section>

      {/* 2. SECCIÓN STACK: Fondo Negro Puro para resaltar las tarjetas */}
      <section className="tech-wrap relative overflow-hidden">
        {/* Un círculo de luz naranja sutil de fondo solo para esta sección */}
        <TechStack />
      </section>

      {/* 3. SECCIÓN TRAYECTORIA: Fondo Gris Muy Oscuro con separador curvo o recto */}
      <section className="bg-[#0d0d0d] py-24 border-y border-white/5">
        <Experience />
      </section>

      {/* 4. SECCIÓN PROYECTOS: Volvemos al Negro para el Grid final */}
      <section className="bg-[#050505] py-24">
        <Projects />
      </section>

      <footer className="py-10 text-center text-gray-600 text-xs bg-[#050505]">
        © {new Date().getFullYear()} Gael Gaytán • {lang === 'es' ? "Hecho con Next.js" : "Built with Next.js"}
      </footer>
    </main>
  );
}

// ESTA ES LA EXPORTACIÓN DEFAULT QUE NEXT.JS NECESITA
export default function Page() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
