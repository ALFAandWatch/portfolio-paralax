'use client';
import Image from 'next/image';

const CVButton = () => {
   return (
      <div className="flex gap-4">
         <a
            href="/resume_alfonso_gonzalez_fullstackDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto h-12 px-5 text-gray-300 border border-gray-300 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300 gap-2"
         >
            Mi CV (ES)
            <Image
               src="/download.png"
               alt="Descargar CV"
               width={30}
               height={30}
               className="inline-block"
            />
         </a>
         <a
            href="/resume_alfonso_gonzalez_fullstackDeveloper_(ENG).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto h-12 px-5 text-gray-300 border border-gray-300 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300 gap-2"
         >
            Mi CV (EN)
            <Image
               src="/download.png"
               alt="Descargar CV"
               width={30}
               height={30}
               className="inline-block"
            />
         </a>
      </div>
   );
};

export default CVButton;
