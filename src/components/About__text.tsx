'use client';

import { useLanguage } from '@/app/context/LanguageContext';

const About__text = () => {
  const { language } = useLanguage();
  return (
    <section className='about__text text-left w-[100%] pr-[8rem]'>
      <h3>
        <span className='capital'>E</span>duard{' '}
        <span className='capital'>S</span>anguino
      </h3>
      <p className='text-[2rem]'>FrontEnd Developer</p>
      <br />
      {language === 'es' ? (
        <>
          <p>
            ¡Hola! Soy un Geek entusiasta, especializado en el desarrollo
            Frontend de webs y aplicaciones.
          </p>
          <br />
          <p>
            Me especializo en desarrollo con React y Next pero no le tengo miedo
            a nada.
          </p>
          <br />
        </>
      ) : language === 'ca' ? (
        <>
          <p>
            ¡Hola! Sóc un entusiasta de la tecnologia, especialitzat en el
            desenvolupament Frontend de webs i aplicacions.
          </p>
          <br />
          <p>
            M' especialitzo en el desenvolupament amb React i Next, però no li
            tinc por a res.
          </p>
          <br />
        </>
      ) : (
        <>
          <p>
            Hi! I'm an enthusiastic Geek, specialized in Frontend development of
            websites and applications.
          </p>
          <br />
          <p>
            I specialize in development with React and Next, but I'm not afraid
            of anything.
          </p>
          <br />
        </>
      )}
    </section>
  );
};
export default About__text;
