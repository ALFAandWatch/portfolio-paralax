import Seccion2 from '@/components/Seccion2/Seccion2';
import Image from 'next/image';
import StackCard from '@/components/StackCard/StackCard';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import CVButton from '@/components/CVButton/CVButton';
import ContactoCard from '@/components/contactoCard/ContactoCard';

import { backStack } from '@/utils/backStack';
import { frontStack } from '@/utils/frontStack';
import { projects } from '@/utils/projects';
import { contacto } from '@/utils/contacto';

export default function Home() {
   return (
      <main className="main-container relative">
         <div className="parallax-container-1">
            {/* SECTION 1 */}
            <section className="section-container fondo-seccion-1 sticky top-0 z-1 bg-black">
               <div className="w-full h-screen flex">
                  <div className="w-1/2 h-full flex items-center justify-end">
                     <div className="foto-perfil-card relative w-3/4 h-3/4 bg-violet-500 hover:shadow-2xl hover:shadow-violet-300 transition-shadow duration-300">
                        <Image
                           src="/perfilbyn.png"
                           alt="Alfonso Gonzalez"
                           fill
                           sizes="50vw"
                           className="object-cover hover:brightness-120 transition-all duration-800 ease-in-out"
                        />
                     </div>
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-center mx-20 gap-4">
                     <h1 className="text-7xl text-gray-300 font-bold font(family-name:--font-poppins) pb-8 shadow text-shadow">
                        Hello World!
                     </h1>
                     <p className="mt-4 text-5xl text-gray-300 font-normal">
                        Soy{' '}
                        <span className="text-violet-500">
                           Alfonso González
                        </span>
                     </p>
                     <p className="mt-4 text-lg text-gray-300 font-normal">
                        Desarrollador web enfocado en crear interfaces modernas,
                        fluidas y con atención al detalle. Me apasiona construir
                        experiencias digitales limpias, dinámicas y bien
                        pensadas.
                     </p>
                     <div className="socials-container flex gap-6 mt-6 text-lg">
                        <a
                           href="https://www.linkedin.com/in/alfonso-gonzalez-desarrollador/"
                           target="_blank"
                           className="w-12 h-12 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300"
                        >
                           <Image
                              src="/InBug-White.png"
                              alt="InBug"
                              width={30}
                              height={30}
                              className="inline-block"
                           />
                        </a>
                        <a
                           href="https://github.com/ALFAandWatch"
                           target="_blank"
                           className="w-12 h-12 hover:bg-violet-500 flex justify-center items-center rounded-full transition-colors duration-300"
                        >
                           <Image
                              src="/github-mark-white.png"
                              alt="GitHub"
                              width={30}
                              height={30}
                              className="inline-block"
                           />
                        </a>
                        <CVButton />
                     </div>
                  </div>
               </div>
            </section>
            {/* SECTION 2 */}

            <div className="h-[5vh] w-full relative bg-black">
               <Image
                  src="/violetSlide.svg"
                  alt="wave"
                  fill
                  sizes="5vh"
                  className="ml-70 object-cover z-10"
               />
            </div>
            <section className="section-container fondo-seccion-2 relative z-10">
               <div className="w-full h-full flex p-10">
                  <div className="w-1/2 flex flex-col gap-4">
                     <h2 className="text-5xl text-gray-200 font-bold">
                        Tech Stack
                     </h2>
                     <h3 className="text-3xl text-gray-200">Front-End()</h3>
                     <div className="flex flex-wrap gap-3">
                        {frontStack.map((item) => (
                           <StackCard
                              key={item.name}
                              name={item.name}
                              url={item.url}
                           />
                        ))}
                     </div>
                     <h3 className="text-3xl text-gray-200">Back-End()</h3>
                     <div className="flex flex-wrap gap-3">
                        {backStack.map((item) => (
                           <StackCard
                              key={item.name}
                              name={item.name}
                              url={item.url}
                           />
                        ))}
                     </div>
                  </div>
                  <div className="w-1/2 text-5xl text-gray-200">
                     <h2 className="font-bold">Algunos de mis hobbies.</h2>
                     <Seccion2 />
                  </div>
               </div>
            </section>
         </div>
         <div className="parallax-container-2">
            {/* SECTION 3 */}
            <section className="section-container-fluid fondo-seccion-3 bg-black relative z-200">
               <div>
                  <h2 className="font-bold text-5xl text-center text-white">
                     Algunos Proyectos
                  </h2>
               </div>
               <div className="grid grid-cols-3 gap-16 p-10">
                  {projects.map((project, i) => (
                     <ProjectCard key={i} project={project} />
                  ))}
               </div>
            </section>
            <div className="h-[5vh] w-full relative fondo-segundo-slide bg-black">
               <Image
                  src="/blackSlide.svg"
                  alt="wave"
                  fill
                  sizes="5vh"
                  className="-ml-70 object-cover z-10"
               />
            </div>
            <section className="last-container overflow-hidden bg-black fondo-seccion-4 sticky bottom-0 z-2">
               <h2 className="text-5xl text-gray-200 font-bold text-center py-15">
                  Contacto
               </h2>
               <div className="flex flex-nowrap justify-center gap-5">
                  {contacto.map((contacto, i) => (
                     <ContactoCard key={i} contacto={contacto} />
                  ))}
               </div>
            </section>
         </div>
      </main>
   );
}
