'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
   const { lang, setLang } = useLanguage();

   return (
      <div className="flex z-300">
         <button
            onClick={() => setLang('es')}
            className={`py-1.5 px-2.5 flex items-center justify-center rounded-s-full border border-gray-600 dark:border-gray-300 ${
               lang === 'es' ? 'bg-white text-black' : 'bg-gray-700 text-white'
            }`}
         >
            ES
         </button>

         <button
            onClick={() => setLang('en')}
            className={`py-1.5 px-2.5 flex items-center justify-center rounded-e-full border border-gray-600 dark:border-gray-300 ${
               lang === 'en' ? 'bg-white text-black' : 'bg-gray-700 text-white'
            }`}
         >
            EN
         </button>
      </div>
   );
}
