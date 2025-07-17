"use client";
import { createContext, useContext, useState } from "react";

import en from "@/locales/en.json";
import ta from "@/locales/ta.json";
import fr from "@/locales/fr.json";
import hi from "@/locales/hi.json";

const translations = { en, ta, fr, hi };


type Language = "en" | "ta" | "fr" | "hi";

const LanguageContext = createContext({
  language: "en" as Language,
  setLanguage: (_lang: Language) => {},
  t: en
});


export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};


export const useLanguage = () => useContext(LanguageContext);
