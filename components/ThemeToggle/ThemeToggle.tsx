'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
   const [theme, setTheme] = useState<'light' | 'dark'>('dark');

   const applyTheme = (newTheme: 'light' | 'dark') => {
      if (newTheme === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   };

   useEffect(() => {
      const savedTheme = localStorage.getItem('theme') as
         | 'light'
         | 'dark'
         | null;

      if (savedTheme) {
         setTheme(savedTheme);
         applyTheme(savedTheme);
      } else {
         setTheme('dark');
         applyTheme('dark');
      }
   }, []);

   const toggleTheme = (newTheme: 'light' | 'dark') => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
   };

   return (
      <div className="fixed top-10 right-10 z-1000 flex">
         <button
            onClick={() => toggleTheme('light')}
            className={`py-3 px-5 flex items-center justify-center rounded-s-full border border-gray-600 dark:border-gray-300 ${
               theme === 'light'
                  ? 'bg-white text-black'
                  : 'bg-gray-700 text-white'
            }`}
         >
            <span className="text-2xl leading-none">☀️</span>
         </button>

         <button
            onClick={() => toggleTheme('dark')}
            className={`py-3 px-5 flex items-center justify-center rounded-e-full border border-gray-600 dark:border-gray-300 ${
               theme === 'dark'
                  ? 'bg-white text-black'
                  : 'bg-gray-700 text-white'
            }`}
         >
            <span className="text-2xl leading-none">🌙</span>
         </button>
      </div>
   );
}
