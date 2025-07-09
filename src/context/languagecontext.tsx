"use client";
import { createContext, useContext, useState } from "react";
import en from "@/locales/en.json";
import ta from "@/locales/ta.json";

const translations = { en, ta };

type Language = "en" | "ta";

const LanguageContext = createContext({
  language: "en" as Language,
  toggleLanguage: () => {},
  t: en 
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ta" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
