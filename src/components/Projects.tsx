'use client';
import { useLanguage } from '@/app/context/LanguageContext';
import cintelec from '../assets/images/Cintelec.png';
import rock from '../assets/images/MetalFestival.png';
import next from '../assets/icons/Next-white.svg';
import typescript from '../assets/icons/Typescript--white.svg';
import tailwind from '../assets/icons/Tailwind--white.svg';
import javascript from '../assets/icons/JavaScript-white.svg';
import html5 from '../assets/icons/HTML5--white.svg';
import css3 from '../assets/icons/CSS3--white.svg';
import sass from '../assets/icons/Sass-white.svg';
import node from '../assets/icons/Node-white.svg';
import gulp from '../assets/icons/gulp-white.svg';
import Projects__card from './Projects__card';
import Cintelec from './projects_info/Cintelec';
import MetalFestival from './projects_info/Festival';

const Projects = () => {
  const { language } = useLanguage();
  return (
    <div className='w-full h-full text-left p-[2rem]'>
      <h1 id='projects'>
        <span className='capital font-bold'>
          {language === 'es' ? 'T' : language === 'ca' ? 'T' : 'W'}
        </span>
        {language === 'es' ? 'rabajos' : language === 'ca' ? 'reballs' : 'orks'}
      </h1>

      <section className='grid__jobs grid grid-cols-1 w-full h-[40%] mt-[-1.6rem] justify-center items-center '>
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
      </section>

      <h1>
        <span className='capital font-bold mt-[-5rem]'>P</span>
        {language === 'es'
          ? 'rojectos'
          : language === 'ca'
            ? 'rojectes'
            : language === 'en'
              ? 'rojects'
              : 'proyectos'}
      </h1>

      <section className='grid__jobs grid grid-cols-1 w-full h-[40%] mt-[-1.6rem] justify-center items-center '>
        <Projects__card
          image={rock}
          imageAlt={'rock'}
          tech={[sass, gulp, javascript, html5]}
          description={
            language === 'es'
              ? 'Página Web de un festival ficticio'
              : language === 'ca'
                ? "Pàgina Web d'un festival fictici"
                : 'Web Page of a fictitious festival'
          }
          title='Metal & Rock Festival'
          link='https://sanguinocastro.github.io/MusicalFestival/'
          text={<MetalFestival />}
        />
      </section>
    </div>
  );
};
export default Projects;
