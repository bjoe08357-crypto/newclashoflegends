"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries } from "@/i18n";

export type Language = "en" | "id";

type LanguageContextValue = {
  lang: Language;
  setLanguage: (l: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("lang");
      if (saved === "en" || saved === "id") return saved;
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
      // reflect on <html lang>
      const html = document.documentElement;
      if (html) html.setAttribute("lang", lang);
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    setLanguage: setLang,
    toggleLanguage: () => setLang((l) => (l === "en" ? "id" : "en")),
    t: (key: string) => {
      const dict = dictionaries[lang] ?? dictionaries.en;
      return dict[key] ?? key;
    },
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


