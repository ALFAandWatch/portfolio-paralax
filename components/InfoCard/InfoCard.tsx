import Image from 'next/image';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const InfoCard = () => {
   return (
      <section
         id="contacto"
         className="sectionWrapper min-h-screen flex items-center justify-center"
      >
         <div className="flex flex-row items-start max-w-[50rem] gap-[2rem] mx-auto border p-[1rem] border-[#39c9bb] rounded-md bg-[#335a55] rounded-[0.5rem]">
            {/* Profile Picture */}
            {/* <Image
               src="/profilepic.jpg"
               alt="Alfonso González"
               height={160}
               width={160}
               className="rounded-full border-4 border-[#39c9bb] shadow-lg"
            ></Image> */}

            {/* Personal Info */}
            <div className="flex flex-col gap-[1rem]">
               <h2>Alfonso González</h2>
               <p className="text-[#39c9bb]">
                  Full Stack Developer. Montevideo, Uruguay.
               </p>

               {/* Descripción */}
               <p className="text-gray-400 mt-4 max-w-md">
                  Soy un apasionado del desarrollo web con experiencia en React,
                  Next.js y TypeScript. Me encanta crear aplicaciones dinámicas
                  y escalables, siempre buscando mejorar mis habilidades.
               </p>

               {/* Tecnologías */}
               <div className="mt-6 flex flex-wrap gap-[1rem] gap-y-[0.5rem] content-start">
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     React
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     Next.js
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     TypeScript
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     Node.js
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     Tailwind CSS
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     HTML
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     CSS
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     Bootstrap
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     TypeORM
                  </span>
                  <span className="px-[1rem] py-[0.5rem] bg-[#39c9bb] rounded-[0.5rem] text-sm">
                     PostgresSQL
                  </span>
               </div>

               {/* Contacto */}
               <div className="mt-[1rem] flex flex-wrap justify-start gap-[1.5rem]">
                  <a
                     href="https://github.com/ALFAandWatch"
                     target="_blank"
                     className="text-[#39c9bb] hover:underline"
                  >
                     <FaGithub className="w-5 h-5 inline pr-2 align-sub" />
                     GitHub
                  </a>
                  <a
                     href="https://www.linkedin.com/in/alfonso-gonzalez-423a072a7"
                     target="_blank"
                     className="text-[#39c9bb] hover:underline"
                  >
                     <FaLinkedin className="w-5 h-5 inline pr-2 align-sub" />
                     LinkedIn
                  </a>
                  <a
                     href="mailto:alfonso.gonzalezwebdev@gmail.com"
                     className="text-[#39c9bb] hover:underline"
                  >
                     <IoMdMail className="w-5 h-5 inline pr-2 align-sub" />
                     Email
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default InfoCard;
