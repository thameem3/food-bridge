"use client";
import { createContext, useContext, useState } from "react";

// 🔽 Import all language JSON files
import en from "@/locales/en.json";
import ta from "@/locales/ta.json";
import fr from "@/locales/fr.json";
import hi from "@/locales/hi.json";

// 🔁 Add all to translations object
const translations = { en, ta, fr, hi };

// 🔤 Define all supported language codes
type Language = "en" | "ta" | "fr" | "hi";

// 🔄 Create context
const LanguageContext = createContext({
  language: "en" as Language,
  setLanguage: (_lang: Language) => {},
  t: en
});

// 🌍 Provider to wrap your app
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 🔗 Hook to use in your components
export const useLanguage = () => useContext(LanguageContext);
