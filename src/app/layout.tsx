import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './normalize.css';
import './globals.css';
import './darkMode.css';

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
        {/* <link
          rel='preload'
          href='./assets/fonts/Strawford/Strawford_Regular.ttf'
          as='font'
          type='font/ttf'
        /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
