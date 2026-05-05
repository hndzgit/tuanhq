"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('vi');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('appLang');
    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('appLang', newLang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value) value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Provide a fallback for SSR or if used outside provider
    return {
      lang: 'vi',
      setLang: () => {},
      t: (key) => {
        const keys = key.split('.');
        let value = translations['vi'];
        for (const k of keys) {
          if (value) value = value[k];
        }
        return value || key;
      }
    };
  }
  return context;
};
