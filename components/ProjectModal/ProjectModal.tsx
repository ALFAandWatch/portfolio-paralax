'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface ProjectModalProps {
   isOpen: boolean;
   onClose: () => void;
   project: {
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

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
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
         <div className="relative bg-[rgb(225,245,235)] dark:bg-zinc-900 rounded-2xl w-full max-w-2xl p-8 z-10 shadow-[0_0_40px_rgba(255,255,255,0.08)] border border-white/10">
            {/* Botón cerrar */}
            <button
               onClick={onClose}
               className="absolute top-5 right-5 text-white/70 hover:text-white transition text-xl invert dark:invert-0"
            >
               ✕
            </button>

            {/* Imagen */}
            <div className="w-full flex justify-center m-0 lg:mb-10 lg:mt-4">
               <div className="relative w-full max-w-lg h-64">
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
                        className="object-contain"
                     />
                  )}
               </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
               <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-100">
                  {project.title}
               </h3>

               {/* Stack */}
               <div className="flex flex-wrap justify-center gap-2 my-4">
                  {project.stack.map((tech) => (
                     <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full  bg-gray-600/20 dark:bg-white/10 text-gray-600 dark:text-white/80 border border-gray-600 dark:border-white/10"
                     >
                        {tech}
                     </span>
                  ))}
               </div>

               <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
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
                     className="mt-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
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
