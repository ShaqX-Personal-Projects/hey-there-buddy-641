import { createContext, useContext, useState, ReactNode } from "react";
import { dictionaries, Dictionary } from "@/i18n/dictionaries";

type Language = "da" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language") as Language;
      return stored || "da";
    }
    return "da";
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem("language", lang);
    setLanguageState(lang);
    
    // Update HTML lang attribute for accessibility
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  const dict = dictionaries[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
