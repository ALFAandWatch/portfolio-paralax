'use client';
import Image from 'next/image';

interface ProjectProps {
   project: {
      title: string;
      shortDescription: string;
      fullDescription: string;
      image: string;
      link: string;
      inProgress: boolean;
      featured?: boolean;
      stack: string[];
   };
   onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectProps) => {
   const { title, shortDescription, image, inProgress, featured, stack } =
      project;

   return (
      <div
         onClick={onClick}
         className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 bg-black border 
                     ${featured ? 'border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)]' : 'border-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.08)]'}
                     hover:border-white/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10`}
      >
         <div className="relative h-60 overflow-hidden">
            <Image
               src={image}
               alt={title}
               fill
               sizes="100vw"
               className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />
         </div>

         {featured && (
            <div className="absolute top-4 right-4 z-20 bg-cyan-400/20 text-cyan-300 text-xs font-semibold px-4 py-1 rounded-full border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] backdrop-blur-sm">
               PROYECTO DESTACADO
            </div>
         )}

         {inProgress && (
            <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
               En progreso
            </div>
         )}

         <div className="p-6 bg-gradient-to-b from-zinc-900 to-black flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-white text-center mb-4">
               {title}
            </h3>

            {/* Stack */}
            <div className="flex flex-wrap justify-center gap-2 my-4">
               {stack.map((tech) => (
                  <span
                     key={tech}
                     className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                  >
                     {tech}
                  </span>
               ))}
            </div>

            <p className="text-md text-zinc-400 text-center leading-relaxed grow">
               {shortDescription}
            </p>

            <div className="mt-5 flex justify-center">
               <span className="text-xs tracking-widest text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VER DETALLES →
               </span>
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
