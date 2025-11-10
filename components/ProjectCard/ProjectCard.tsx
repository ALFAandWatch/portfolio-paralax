'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
   project: {
      title: string;
      description: string;
      image: string;
      link: string;
      inProgress: boolean;
   };
}

const ProjectCard = ({ project }: ProjectProps) => {
   const { title, description, image, link, inProgress } = project;
   return (
      <Link
         href={link ? link : '#'}
         {...(link ? {} : { onClick: (e) => e.preventDefault() })}
         {...(link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
         className={`relative rounded-xl shadow-md overflow-hidden h-100 flex flex-col brightness-70 hover:brightness-105 hover:cursor-pointer hover:shadow-xl hover:shadow-white/20 ${
            inProgress ? 'border-2 border-yellow-500' : ''
         }`}
      >
         {inProgress && (
            <div className="absolute bg-yellow-500 px-10 py-1 z-1 w-full flex justify-center items-center gap-2">
               <p className=" text-black text-sm font-bold text-center">
                  En Progreso
               </p>

               <Image
                  src="/construccion.svg"
                  alt="En Progreso"
                  width={24}
                  height={24}
               />
            </div>
         )}
         <div className="relative min-h-1/2">
            <Image
               src={image}
               alt={title}
               fill
               sizes="100vw"
               className="w-full object-cover object-center"
            />
         </div>
         <div className="p-4 h-1/2 mt-auto flex flex-col justify-around cardTitleGradient">
            <h3 className="text-lg font-semibold mb-2 text-white text-center">
               {title}
            </h3>
            <p className="text-white text-sm text-center font-semibold">
               {description}
            </p>
         </div>
      </Link>
   );
};

export default ProjectCard;
