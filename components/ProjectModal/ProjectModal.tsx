'use client';

import { TranslationSchema } from '@/utils/translations';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProjectModalProps {
   isOpen: boolean;
   onClose: () => void;
   project: {
      id: number;
      title: string;
      shortDescription: string;
      fullDescription: string;
      image: string;
      link: string;
      inProgress: boolean;
      featured?: boolean;
      stack: string[];
      video?: string;
      apk?: string;
   } | null;
}

const ProjectModal = ({
   isOpen,
   onClose,
   project,
   t,
}: ProjectModalProps & { t: TranslationSchema }) => {
   useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
   }, [isOpen]);

   if (!isOpen || !project) return null;

   return (
      <div className="fixed inset-0 z-500 flex items-center justify-center px-4">
         {/* Overlay */}
         <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
         />

         {/* Modal */}
         <div className="relative bg-radial-[at_90%_50%] from-[rgba(117,224,170,0.5)] to-[rgb(225,245,235)] dark:bg-radial-[at_90%_50%] dark:from-violet-500/50 dark:to-zinc-900 rounded-sm w-full max-w-2xl p-3 z-10 shadow-[0_0_40px_rgba(255,255,255,0.08)] border border-white/10">
            <div className="relative flex justify-center items-center">
               {/* Titulo */}
               <h3 className="text-2xl font-semibold text-[#059669] dark:text-violet-500">
                  {project.title}
               </h3>

               {/* Botón cerrar */}
               <button
                  onClick={onClose}
                  className="absolute right-0 p-1 px-2 rounded-md text-gray-800 dark:text-white/70 hover:brightness-115 transition text-xl dark:invert-0 border-2 border-[#059669] dark:border-violet-500"
               >
                  ✕
               </button>
            </div>

            {/* Imagen */}
            <div className="w-full flex justify-center m-0 lg:my-4">
               <div className="relative w-full h-86 mt-1">
                  {project.video ? (
                     <video
                        src={project.video}
                        controls
                        className="w-full h-full object-contain rounded-lg"
                     />
                  ) : (
                     <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                     />
                  )}
               </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col items-center text-center gap-1 p-2 bg-black/30 rounded-md">
               {/* Stack */}
               <div className="flex flex-wrap justify-center gap-2 my-1 mt-2">
                  {project.stack.map((tech) => (
                     <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-black/20 dark:bg-white/10 text-gray-100 dark:text-white/80 border border-white/10"
                     >
                        {tech}
                     </span>
                  ))}
               </div>

               <p className="text-gray-100 dark:text-gray-100 leading-relaxed whitespace-normal text-justify">
                  {project.fullDescription}
               </p>

               {project?.apk && (
                  <a
                     href={project.apk}
                     download
                     target="_blank"
                     rel="noopener noreferrer"
                     className="mt-4 inline-block px-4 py-2 bg-blue-600 text-gray-600 dark:text-gray-100 rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                     Descargar APK
                  </a>
               )}

               {project.link && (
                  <a
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="mt-2 bg-[#059669] dark:bg-violet-500 text-gray-200 px-8 py-3 rounded-sm font-semibold hover:brightness-115 transition hover:cursor-pointer"
                  >
                     Visitar sitio
                  </a>
               )}
            </div>
         </div>
      </div>
   );
};

export default ProjectModal;
