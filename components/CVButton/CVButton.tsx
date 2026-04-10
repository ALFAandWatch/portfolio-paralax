'use client';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';

const CVButton = () => {
   const container = {
      hidden: {},
      show: {
         transition: {
            staggerChildren: 0.35,
            delayChildren: 1.2,
         },
      },
   };

   const item = {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
   };

   return (
      <motion.div
         className="flex items-center gap-2 lg:gap-4"
         variants={container}
         initial="hidden"
         animate="show"
      >
         <motion.a
            href="/resume_Alfonso_Gonzalez_Fullstack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto h-10 lg:h-12 px-3 lg:px-5 text-gray-300 text-xs text-nowrap font-extrabold border border-gray-300 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300 gap-0 lg:gap-2"
            variants={item}
         >
            Mi CV (ES)
            <Image
               src="/download.png"
               alt="Descargar CV"
               width={30}
               height={30}
               className="inline-block ps-2 lg:p-0"
            />
         </motion.a>
         <motion.a
            href="/resume_Alfonso_Gonzalez_Fullstack_Developer_(ENG).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto h-10 lg:h-12 px-3 lg:px-5 text-gray-300 text-xs text-nowrap font-extrabold border border-gray-300 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300 gap-0 lg:gap-2"
            variants={item}
         >
            Mi CV (EN)
            <Image
               src="/download.png"
               alt="Descargar CV"
               width={30}
               height={30}
               className="inline-block ps-2 lg:p-0"
            />
         </motion.a>
      </motion.div>
   );
};

export default CVButton;
