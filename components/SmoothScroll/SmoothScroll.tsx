'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
   useEffect(() => {
      const lenis = new Lenis({
         duration: 1.2,
         smoothWheel: true,
      });

      let rafId: number;

      function raf(time: number) {
         lenis.raf(time);
         rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);

      return () => {
         cancelAnimationFrame(rafId);
         lenis.destroy();
      };
   }, []);

   return children;
}
