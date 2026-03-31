'use client';
import Image from 'next/image';

const CVButton = () => {
   return (
      <div className="flex items-center gap-2 lg:gap-4">
         <a
            href="/resume_Alfonso_Gonzalez_Fullstack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto h-10 lg:h-12 px-3 lg:px-5 text-gray-300 text-xs text-nowrap font-extrabold border border-gray-300 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300 gap-0 lg:gap-2"
         >
            Mi CV (ES)
            <Image
               src="/download.png"
               alt="Descargar CV"
               width={30}
               height={30}
               className="inline-block ps-2 lg:p-0"
            />
         </a>
         <a
            href="/resume_Alfonso_Gonzalez_Fullstack_Developer_(ENG).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto h-10 lg:h-12 px-3 lg:px-5 text-gray-300 text-xs text-nowrap font-extrabold border border-gray-300 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300 gap-0 lg:gap-2"
         >
            Mi CV (EN)
            <Image
               src="/download.png"
               alt="Descargar CV"
               width={30}
               height={30}
               className="inline-block ps-2 lg:p-0"
            />
         </a>
      </div>
   );
};

export default CVButton;
