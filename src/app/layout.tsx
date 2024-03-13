import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './styles/normalize.css';
import './styles/globals.css';
import './styles/darkMode.css';
import './styles/language.css';
import './styles/weather.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio personal Eduard Sanguino',
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
      <body>{children}</body>
    </html>
  );
}
