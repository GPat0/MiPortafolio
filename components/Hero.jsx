"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLang } from "./LanguageContext";

export default function Hero() {
  const { lang } = useLang();
  const roles = ["Full Stack Developer", "Mobile Developer", "Frontend Jr. Developer", "BI Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % roles.length), 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section className="min-h-[92vh] flex items-center justify-center px-0 pt-24 pb-16">
      <div className="hero-shell">
        <div className="hero-shell-stars" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-card"
        >
          <div className="hero-card-glow" />
          <div className="hero-stars" />
          <div className="hero-card-stars" />
          <div className="hero-top-line" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hero-code-icon"
        >
          {"</>"}
        </motion.div>

        <h1 className="hero-title">Gael Gaytán</h1>

        <div className="h-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[index]}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="hero-subtitle"
            >
              {roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="hero-copy">
          {lang === "es"
            ? "Transformo ideas en experiencias digitales excepcionales. Especializado en crear productos modernos con código limpio y diseño intuitivo."
            : "Transforming ideas into exceptional digital experiences. Focused on modern products with clean code and intuitive design."}
        </p>

        <div className="hero-actions">
          <button className="hero-btn hero-btn-primary">
            <span className="hero-btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.014c0 4.424 2.865 8.184 6.839 9.508.5.094.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.344-3.369-1.344-.455-1.159-1.11-1.467-1.11-1.467-.907-.621.069-.609.069-.609 1.003.071 1.53 1.032 1.53 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.22-.253-4.555-1.113-4.555-4.955 0-1.094.39-1.99 1.029-2.691-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.027A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.116 2.504.338 1.909-1.296 2.748-1.027 2.748-1.027.546 1.378.203 2.397.1 2.65.64.701 1.028 1.597 1.028 2.691 0 3.852-2.338 4.699-4.566 4.947.359.309.678.92.678 1.854 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.02 10.02 0 0 0 22 12.014C22 6.484 17.523 2 12 2Z" />
              </svg>
            </span>
            GitHub
          </button>
          <a
            className="hero-btn hero-btn-outline"
            href="https://www.linkedin.com/in/gael-gaytan-bb4a86249/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hero-btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.5c0 1.64 1.32 2.99 2.95 2.99h.03c1.66 0 2.99-1.35 2.99-2.99C7.97 4.84 6.64 3.5 4.98 3.5ZM2.4 21h5.17V9H2.4v12ZM9.6 9h4.95v1.64h.07c.69-1.24 2.38-2.55 4.9-2.55C22.4 8.09 22 11.19 22 15v6h-5.17v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.6V9Z" />
              </svg>
            </span>
            LinkedIn
          </a>
          <a className="hero-btn hero-btn-outline" href="mailto:gael.pato04@gmail.com">
            <span className="hero-btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2l8 4.8 8-4.8V8H4Zm16 8V10.3l-7.48 4.49a1 1 0 0 1-1.04 0L4 10.3V16h16Z" />
              </svg>
            </span>
            Contacto
          </a>
        </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="hero-scroll"
          >
            <span>↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
