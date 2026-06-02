'use client';
import { useLanguage } from '@/context/LanguageContext';
import { translations, TranslationSchema } from '@/utils/translations';
import Image from 'next/image';
import Link from 'next/link';

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

const HighlightedProjectCard = ({
   project,
   onClick,
   t,
}: ProjectProps & { t: TranslationSchema }) => {
   const { title, fullDescription, image, inProgress, academic, stack, link } =
      project;

   return (
      <Link
         href={link}
         target="_blank"
         className={`group relative p-3 aspect-video w-full overflow-hidden cursor-pointer duration-500 bg-black border-3 dark:border-2 h-full flex flex-col justify-end items-stretch hover:border-4 hover:border-green-700 dark:hover:border-gray-100 hover:cursor-pointer transition-all`}
      >
         <Image
            src={image}
            alt="Project Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain transform scale-100 absolute inset-0 transition-transform duration-1500 ease-out"
         />
         <div className="absolute inset-0 bg-linear-to-t from-black from-20% to-60% to-black/0 transition-all duration-500 pointer-events-none z-10" />

         {inProgress && (
            <div className="absolute top-4 left-4 z-20 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
               {t.labels.inProgress}
            </div>
         )}
         <div className="w-[95%] z-30 mx-auto flex flex-col justify-end gap-4 h-1/2">
            {academic && (
               <div className="w-fit z-20 uppercase bg-orange-400/50 text-gray-100 text-xs font-semibold px-4 py-1 rounded-full border border-orange-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] backdrop-blur-sm">
                  {t.labels.academic}
               </div>
            )}
            <h3 className="text-2xl md:text-6xl font-semibold text-white [text-shadow:0_0_4px_black]">
               {title}
            </h3>
            <div className="bg-white h-0.5 md:h-1 w-50">
               <p className="opacity-0">.</p>
            </div>
            {/* Stack */}
            <div className="flex flex-wrap gap-2">
               {stack.map((tech) => (
                  <span
                     key={tech}
                     className="text-xs md:text-sm px-3 py-1 rounded-full bg-[#059669] dark:bg-violet-700 text-white dark:text-white/80 dark:border-white/10 font-semibold"
                  >
                     {tech}
                  </span>
               ))}
            </div>
            <p className="hidden md:block text-lg text-white [text-shadow:0_0_4px_black] leading-relaxed">
               {fullDescription}
            </p>
         </div>
      </Link>
   );
};

export default HighlightedProjectCard;
