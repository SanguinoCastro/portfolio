import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
// import { Inter } from 'next/font/google';
import './styles/normalize.css';
import './styles/globals.css';
import './styles/darkMode.css';
import './styles/language.css';
import './styles/weather.css';
import './styles/map.css';
import './styles/projects.css';
import './styles/skills.css';
import './styles/contactForm.css';
import './styles/cv.css';
import './styles/whatsapp.css';
import './styles/dice.css';
import './styles/privacity.css';
import './styles/animation.css';
import './styles/kofi.css';

import { DarkModeProvider } from './context/DarkModeContext';
import Footer from '@/components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import KofiScript from '@/components/KofiScript';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio ES',
  description:
    'Portfolio personal de Eduard Sanguino front end developer de webs y aplicaciones eduardsanguinodev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <head>
        <link
          rel='shortcut icon'
          href='favicon.ico'
          type='image/x-icon'
          sizes='64x64'
        />
        <link
          rel='preload'
          href='./assets/fonts/Strawford/Strawford_Regular.ttf'
          as='font'
          type='font/ttf'
        />
        <link
          rel='font'
          href='./assets/fonts/Strawford/Strawford_Regular.ttf'
        />
      </head>
      <body>
        <DarkModeProvider>
          <LanguageProvider>
            <main className='flex justify-center  mt-[2rem]'>
              <div className='main__container center w-[113.5rem] flex flex-col justify-between'>
                <div className='delayed-show'>{children}</div>
                <KofiScript />
                <Footer />
              </div>
            </main>
          </LanguageProvider>
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  );
}
