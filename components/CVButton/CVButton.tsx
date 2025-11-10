'use client';
import Image from 'next/image';

const CVButton = () => {
   const handleDownload = () => {
      if (confirm('¿Deseás descargar tu archivo CV?')) {
         window.location.href =
            '/resume-alfonso-gonzalez-fullstack-developer.zip';
      }
   };

   return (
      <button
         onClick={handleDownload}
         className="w-auto h-12 px-5 text-gray-300 border border-gray-300 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300 gap-2"
      >
         Mi CV
         <Image
            src="/download.png"
            alt="Descargar CV"
            width={30}
            height={30}
            className="inline-block"
         />
      </button>
   );
};

export default CVButton;
