'use client';
import { useLanguage } from '@/app/context/LanguageContext';
import cintelec from '../assets/images/Cintelec.png';
import next from '../assets/icons/Next_white.png';
import typescript from '../assets/icons/Typescript--white.svg';
import tailwind from '../assets/icons/Tailwind--white.svg';
import javascript from '../assets/icons/JavaScript_white.png';
import html5 from '../assets/icons/HTML5--white.svg';
import css3 from '../assets/icons/CSS3--white.svg';
import node from '../assets/icons/Node_white.png';
import Projects__card from './Projects__card';
import { useState } from 'react';
import Cintelec from './projects_info/Cintelec';

const Projects = () => {
  const { language } = useLanguage();
  return (
    <div className='w-full h-full text-left p-[2rem]'>
      <h1 id='projects'>
        <span className='capital font-bold'>T</span>rabajos:
      </h1>

      <Projects__card
        image={cintelec}
        imageAlt={'cintelec'}
        tech={[next, typescript, tailwind, javascript, html5, css3, node]}
        description={
          language === 'es'
            ? 'Página Web Corporativa para la empresa Cintelec'
            : language === 'ca'
              ? "Pàgina Web Corporativa per l'empresa Cintelec"
              : 'Corporate Web Page for Cintelec company'
        }
        title='Web Cintelec'
        link='https://cintelec.com/'
        text={<Cintelec />}
      />
    </div>
  );
};
export default Projects;
