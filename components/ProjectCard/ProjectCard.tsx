'use client';
import { useLanguage } from '@/context/LanguageContext';
import { TranslationSchema } from '@/utils/translations';
import Image from 'next/image';

interface ProjectProps {
   project: {
      id: number;
      title: string;
      shortDescription: string;
      fullDescription: string;
      image: string;
      link: string;
      inProgress: boolean;
      featured?: boolean;
      academic?: boolean;
      stack: string[];
   };

   onClick: () => void;
}

const ProjectCard = ({
   project,
   onClick,
   t,
}: ProjectProps & { t: TranslationSchema }) => {
   const {
      title,
      shortDescription,
      image,
      inProgress,
      featured,
      academic,
      stack,
   } = project;

   const { lang } = useLanguage();

   return (
      <div
         onClick={onClick}
         className={`group relative aspect-video w-full overflow-hidden cursor-pointer transition-all duration-500 bg-black border-3 dark:border-2 h-full flex flex-col 
                  ${
                     featured
                        ? 'border-cyan-400 shadow-[0_0_80px_rgba(34,211,238,0.7)]'
                        : academic
                          ? 'border-orange-400 shadow-[0_0_80px_rgba(251,146,60,0.7)]'
                          : 'border-zinc-800 shadow-[0_0_20px_rgba(255,255,255,0.08)]'
                  }
                  hover:-translate-y-2`}
      >
         <div className="relative aspect-video overflow-hidden">
            <Image
               src={image}
               alt="Project Image"
               fill
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               className="object-cover transform scale-100 transition-transform duration-1500 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 dark:bg-black/40 transition-all duration-500 pointer-events-none" />
         </div>

         {featured && (
            <div className="absolute top-4 right-4 z-20 uppercase bg-cyan-400/50 text-gray-100 text-xs font-semibold px-4 py-1 rounded-full border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] backdrop-blur-sm">
               {t.labels.featured}
            </div>
         )}

         {academic && (
            <div className="absolute top-4 right-4 z-20 uppercase bg-orange-400/50 text-gray-100 text-xs font-semibold px-4 py-1 rounded-full border border-orange-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] backdrop-blur-sm">
               {t.labels.academic}
            </div>
         )}

         {inProgress && (
            <div className="absolute top-4 left-4 z-10 uppercase bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
               {t.labels.inProgress}
            </div>
         )}

         <div className="p-2 flex flex-col justify-end gap-1 items-start h-2/5 w-full absolute bottom-0 opacity-0 translate-y-10 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 bg-black/20 backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-white [text-shadow:0_0_4px_black] text-center">
               {title}
            </h3>

            <p className="text-md text-white [text-shadow:0_0_4px_black] leading-relaxed">
               {shortDescription}
            </p>
            <a
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#059669] dark:bg-violet-500 text-white px-8 py-3 font-semibold hover:brightness-110 transition"
            >
               {t.labels.visit}
            </a>
         </div>
      </div>
   );
};

export default ProjectCard;
