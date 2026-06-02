import type { Metadata } from 'next';
import { Poppins, Instrument_Sans } from 'next/font/google';
import '@/styles/reset.css';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle/LanguageToggle';
import { cookies } from 'next/headers';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
   display: 'swap',
});

const instrumentSans = Instrument_Sans({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
   display: 'swap',
});

export const metadata: Metadata = {
   title: 'Alfonso Gonzalez Portfolio',
   description: 'I am Alfonso and this is my portfolio.',
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const cookieStore = await cookies();
   const lang = cookieStore.get('lang')?.value || 'es';

   return (
      <html lang={lang} className="dark">
         <body className={`${instrumentSans.className} antialiased relative`}>
            <LanguageProvider>
               <div className="flex flex-col items-center fixed top-5 right-10 gap-2 z-300">
                  <ThemeToggle />
                  <LanguageToggle />
               </div>
               {children}
            </LanguageProvider>
         </body>
      </html>
   );
}
