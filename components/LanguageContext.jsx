"use client";
import { createContext, useState, useContext } from 'react';

// 1. Creamos el contexto
const LanguageContext = createContext();

// 2. Creamos el proveedor que envolverá a toda la app
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es'); // Idioma por defecto: español

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Hook personalizado para usar el idioma en cualquier componente
export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang debe usarse dentro de un LanguageProvider");
  }
  return context;
};