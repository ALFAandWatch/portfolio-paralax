'use client';

import Seccion2 from '@/components/Seccion2/Seccion2';
import Image from 'next/image';
import StackCard from '@/components/StackCard/StackCard';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import CVButton from '@/components/CVButton/CVButton';
import ContactoCard from '@/components/contactoCard/ContactoCard';
import { backStack } from '@/utils/backStack';
import { frontStack } from '@/utils/frontStack';
import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal/ProjectModal';
import { motion } from 'framer-motion';
import { useVisits } from '@/hooks/useVisits';
import HighlightedProjectCard from '@/components/HihglightedProjectCard/HighlightedPorjectCard';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

export default function Home() {
   const [selectedProject, setSelectedProject] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = (project: any) => {
      setSelectedProject(project);
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
   };

   const visits = useVisits();
   const { lang } = useLanguage();

   const t = translations[lang];

   const highlightedProjects = t.projects.filter(
      (project) => project.academic || project.featured
   );

   const rows = [];
   for (let i = 0; i < t.projects.length; i += 2) {
      rows.push(t.projects.slice(i, i + 2));
   }

   const container = {
      hidden: {},
      show: {
         transition: {
            staggerChildren: 0.35,
            delayChildren: 0.5,
         },
      },
   };

   const item = {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
   };

   const stackContainer = {
      hidden: {},
      show: {
         transition: {
            staggerChildren: 0.2,
         },
      },
   };

   const stackItem = {
      hidden: { opacity: 0, y: 15 },
      show: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.35 },
      },
   };

   const rowVariant = {
      hidden: { opacity: 0, y: 40 },
      show: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.8 },
      },
   };

   return (
      <main className="main-container relative">
         <div className="parallax-container-1">
            {/* SECTION 1 */}
            <section className="section-container fondo-seccion-1 sticky top-0 z-1 dark:bg-black">
               <motion.div
                  className="w-full h-screen flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  <div className="w-screen lg:w-1/2 h-2/3 lg:h-full flex items-start lg:items-center justify-end px-0 lg:px-10">
                     <div
                        className="
                                       foto-perfil-card relative w-full lg:w-3/4 h-3/4 mt-14 mx-14 lg:mx-0
                                       rounded-3xl
                                       bg-white/5 backdrop-blur-xl
                                       border border-white/10
                                       dark:shadow-[0_20px_60px_rgba(139,92,246,0.35)]
                                       shadow-[0_20px_60px_rgba(5,150,105,0.35)]
                                       dark:hover:shadow-[0_30px_80px_rgba(139,92,246,0.55)]
                                       hover:shadow-[0_30px_80px_rgba(5,150,105,0.55)]
                                       transition-all duration-500
                                       "
                     >
                        <Image
                           src="/perfilbyn.png"
                           alt="Alfonso Gonzalez"
                           fill
                           sizes="50vw"
                           className="object-contain lg:object-cover hover:brightness-120 transition-all duration-800 ease-in-out"
                        />
                     </div>
                  </div>
                  <div className="w-screen lg:w-1/2 h-full flex flex-col lg:justify-center mt-15 px-5 lg:px-10 gap-4">
                     <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-gray-600 dark:text-gray-100">
                        Full Stack Developer{' '}
                        <span className="text-[#059669] dark:text-violet-500">
                           / Frontend Focus
                        </span>
                        <span className="text-[#059669] dark:text-violet-500">
                           .
                        </span>
                     </h1>

                     <p className="text-2xl lg:text-4xl font-medium text-gray-600 dark:text-gray-100">
                        {t.s1.introduction}
                        <motion.span
                           className="text-transparent bg-clip-text bg-linear-to-r from-[#6D28D9] to-[#0E7490] dark:from-[#8B5CF6] dark:to-[#22D3EE]"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.8, delay: 0.3 }}
                        >
                           Alfonso González
                        </motion.span>
                     </p>

                     <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        {t.s1.description}
                     </p>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 opacity-0 hover:opacity-100 transition duration-75">
                        👀 {visits} visitas
                     </p>

                     <motion.div
                        className="socials-container flex gap-2 lg:gap-6 mt-6 text-lg"
                        variants={container}
                        initial="hidden"
                        animate="show"
                     >
                        <motion.a
                           className="w-12 h-12 hover:bg-[#059669] dark:hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300"
                           href="https://www.linkedin.com/in/alfonso-gonzalez-desarrollador/"
                           target="_blank"
                           variants={item}
                        >
                           <Image
                              src="/InBug-White.png"
                              alt="InBug"
                              width={30}
                              height={30}
                              className="inline-block invert dark:invert-0"
                           />
                        </motion.a>
                        <motion.a
                           href="https://github.com/ALFAandWatch"
                           target="_blank"
                           className="w-12 h-12 hover:bg-[#059669] dark:hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300"
                           variants={item}
                        >
                           <Image
                              src="/github-mark-white.png"
                              alt="GitHub"
                              width={30}
                              height={30}
                              className="inline-block invert dark:invert-0"
                           />
                        </motion.a>
                        <CVButton />
                     </motion.div>
                  </div>
               </motion.div>
            </section>

            {/* SECTION 2 */}
            <section className="section-container fondo-seccion-2 relative z-10">
               <div className="w-full h-full flex p-5 lg:p-10 mt-20 lg:m-0">
                  <div className="w-full lg:w-1/2 flex flex-col gap-4">
                     <h2 className="text-4xl lg:text-5xl text-gray-200 font-bold">
                        Tech Stack
                     </h2>
                     <h3 className="text-2xl lg:text-3xl text-gray-200 text-center lg:text-left">
                        Front-End()
                     </h3>
                     <motion.div
                        className="grid grid-cols-4 lg:flex flex-wrap gap-3 lg:gap-3"
                        variants={stackContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-50px' }}
                     >
                        {frontStack.map((item) => (
                           <motion.div key={item.name} variants={stackItem}>
                              <StackCard name={item.name} url={item.url} />
                           </motion.div>
                        ))}
                     </motion.div>
                     <h3 className="text-2xl lg:text-3xl text-gray-200 text-center lg:text-left">
                        Back-End()
                     </h3>
                     <motion.div
                        className="grid grid-cols-4 lg:flex flex-wrap gap-3 lg:gap-3"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-50px' }}
                     >
                        {backStack.map((item) => (
                           <motion.div key={item.name} variants={stackItem}>
                              <StackCard name={item.name} url={item.url} />
                           </motion.div>
                        ))}
                     </motion.div>
                  </div>
                  <div className="w-1/2 text-5xl text-gray-200 hidden lg:block">
                     <h2 className="font-bold">{t.s2.hobbiesTitle}</h2>
                     <Seccion2 />
                  </div>
               </div>
            </section>
         </div>
         <div className="p-5 bg-[rgba(225,245,235,1)] dark:bg-black">
            <h2 className="font-bold text-5xl text-center text-gray-600 dark:text-gray-100 p-2">
               {t.s_extra.title}{' '}
            </h2>
            <div className="flex flex-col gap-15 items-center max-w-5xl mx-auto mt-10">
               {highlightedProjects.map((project) => {
                  return (
                     <HighlightedProjectCard
                        key={project.id}
                        project={project}
                        t={t}
                        onClick={() => openModal(project)}
                     />
                  );
               })}
            </div>
         </div>
         <div className="parallax-container-2">
            {/* SECTION 3 */}
            <section className="section-container-fluid fondo-seccion-3 relative z-200 pt-15">
               <div>
                  <h2 className="font-bold text-5xl text-center text-gray-600 dark:text-gray-100">
                     {t.s3.title}
                  </h2>
               </div>

               <div className="flex flex-col items-center gap-10 p-10">
                  {rows.map((row, rowIndex) => (
                     <motion.div
                        key={rowIndex}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch w-full"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={rowVariant}
                     >
                        {row.map((project, i) => (
                           <ProjectCard
                              key={i}
                              project={project}
                              t={t}
                              onClick={() => openModal(project)}
                           />
                        ))}
                     </motion.div>
                  ))}
               </div>

               <ProjectModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  project={selectedProject}
                  t={t}
               />
            </section>
            {/* SECTION 4 */}
            <section className="last-container overflow-hidden fondo-seccion-4 sticky bottom-0 z-2">
               <h2 className="text-3xl lg:text-5xl text-gray-600 dark:text-gray-100 font-bold text-center py-7 lg:py-15">
                  {t.s4.title}
               </h2>
               <div className="grid grid-cols-2 lg:flex lg:flex-nowrap justify-center gap-3 lg:gap-10">
                  {t.info.map((item, i) => (
                     <div
                        key={i}
                        className={i === t.info.length - 1 ? 'col-span-2' : ''}
                     >
                        <ContactoCard contacto={item} />
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </main>
   );
}
