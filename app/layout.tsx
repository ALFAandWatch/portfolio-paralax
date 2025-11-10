import type { Metadata } from 'next';
import { Poppins, Instrument_Sans } from 'next/font/google';
import '@/styles/reset.css';
import './globals.css';

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

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es">
         <body className={`${instrumentSans.className} antialiased`}>
            {children}
         </body>
      </html>
   );
}
