'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Seccion2 = () => {
   useEffect(() => {
      gsap.from('#div-gimnasio', {
         opacity: 1,
         y: 200,
         x: 50,
         ease: 'power1.inOut',
         rotation: 5,
         scrollTrigger: {
            trigger: '#div-gimnasio',
            start: 'bottom 200%',
            end: 'center 70%',
            scrub: 1,
            markers: false,
         },
      });
      gsap.from('#div-smash', {
         opacity: 1,
         y: 250,
         x: 70,
         ease: 'power1.inOut',
         rotation: 10,
         scrollTrigger: {
            trigger: '#div-smash',
            start: 'bottom 200%',
            end: 'center 70%',
            scrub: 2,
            markers: false,
         },
      });
      gsap.from('#div-slipknot', {
         opacity: 1,
         y: 200,
         x: -120,
         ease: 'power1.inOut',
         rotation: -10,
         scrollTrigger: {
            trigger: '#div-slipknot',
            start: 'bottom 200%',
            end: 'center 70%',
            scrub: 2,
            markers: false,
         },
      });
   }, []);

   return (
      <div className="w-full h-full relative">
         <div
            id="div-gimnasio"
            className="w-auto h-auto absolute top-25 right-110 -rotate-10 shadow-lg shadow-violet-700"
         >
            <div className="relative">
               <h2 className="text-2xl text-gray-200 absolute top-3 -left-7 bg-gray-800 p-3 rounded-md">
                  Voy al Gimnasio
               </h2>
               <Image
                  src="/mancuernas.webp"
                  alt="Gimnasio"
                  width={350}
                  height={200}
                  className=" rounded-xl border-2 border-gray-200"
               />
            </div>
         </div>
         <div
            id="div-smash"
            className="w-auto h-auto absolute top-15 right-25 rotate-12 shadow-lg shadow-violet-700"
         >
            <div className="relative">
               <h2 className="text-2xl text-gray-200 absolute -top-3 -left-10 -rotate-15 bg-gray-800 p-3 rounded-md">
                  Fan del Smash
               </h2>
               <Image
                  src="/smash.avif"
                  alt="Smash"
                  width={300}
                  height={400}
                  className=" rounded-xl border-2 border-gray-200"
               />
            </div>
         </div>
         <div
            id="div-slipknot"
            className="w-auto h-auto absolute top-60 right-50 shadow-lg shadow-violet-700"
         >
            <div className="relative">
               <h2 className="text-2xl text-gray-200 absolute -bottom-3 -left-10 -rotate-7 bg-gray-800 p-3 rounded-md">
                  Escucho buen metal
               </h2>
               <Image
                  src="/slipknot.jpeg"
                  alt="Slipknot"
                  width={300}
                  height={400}
                  className=" rounded-xl border-2 border-gray-200"
               />
            </div>
         </div>
      </div>
   );
};

export default Seccion2;
