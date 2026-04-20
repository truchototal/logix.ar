import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "@/i18n/translations";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const savedLang = localStorage.getItem("logix_lang");
    return (savedLang === "es" || savedLang === "en") ? savedLang : "es";
  });

  const setLang = (newLang: Lang) => {
    localStorage.setItem("logix_lang", newLang);
    setLangState(newLang);
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
