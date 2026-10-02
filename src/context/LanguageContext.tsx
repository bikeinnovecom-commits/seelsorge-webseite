import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang } from '../i18n/translations';

type LangData = typeof translations.de;

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: LangData;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as LangData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
