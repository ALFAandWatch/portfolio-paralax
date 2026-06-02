'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type LanguageContextType = {
   lang: 'es' | 'en';
   setLang: React.Dispatch<React.SetStateAction<'es' | 'en'>>;
};

// 1. Crear contexto
const LanguageContext = createContext<LanguageContextType | null>(null);

// 2. Provider
export function LanguageProvider({ children }: { children: React.ReactNode }) {
   const [lang, setLang] = useState<'es' | 'en'>('es');

   useEffect(() => {
      document.documentElement.lang = lang;
   }, [lang]);

   return (
      <LanguageContext.Provider value={{ lang, setLang }}>
         {children}
      </LanguageContext.Provider>
   );
}

// 3. Hook personalizado
export function useLanguage() {
   const context = useContext(LanguageContext);

   if (!context) {
      throw new Error('useLanguage debe usarse dentro de LanguageProvider');
   }

   return context;
}
