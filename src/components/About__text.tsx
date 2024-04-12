'use client';

import { useLanguage } from '@/app/context/LanguageContext';

const About__text = () => {
  const { language } = useLanguage();
  return (
    <section className='about__text text-left w-[100%] pr-[4rem]'>
      <h3>
        <span className='capital'>E</span>duard{' '}
        <span className='capital'>S</span>anguino
      </h3>
      <p className='text-[2rem]'>FrontEnd Developer</p>
      <br />
      <br />
      {language === 'es' ? (
        <>
          <p>
            ¡Hola! Soy un apasionado desarrollador Frontend con una insaciable
            sed de conocimiento.
          </p>
          <br />
          <p>
            Con más de dos años de formación, proyectos personales y externos.
          </p>
          <br />
          <p>
            Me especializo en el desarrollo con React y Next, pero no le tengo
            miedo a nada.
          </p>
          <br />
          <p>¡Construyamos algo extraordinario!</p>
          <br />
        </>
      ) : language === 'ca' ? (
        <>
          <>
            <p>
              ¡Hola! Sóc un apassionat desenvolupador Frontend amb una
              insaciable set de coneixement.
            </p>
            <br />
            <p>
              Amb més de dos anys de formació, projectes personals i externs.
            </p>
            <br />
            <p>
              M'especialitzo en el desenvolupament amb React i Next, però no li
              tinc por a res.
            </p>
            <br />
            <p>Construïm alguna cosa extraordinària!</p>
            <br />
          </>
        </>
      ) : (
        <>
          <>
            <p>
              Hi! I'm a passionate Frontend developer with an insatiable thirst
              for knowledge.
            </p>
            <br />
            <p>
              With over two years of training, personal and external projects.
            </p>
            <br />
            <p>
              I specialize in development with React and Next, but I'm not
              afraid of anything.
            </p>
            <br />
            <p>Let's build something extraordinary!</p>
            <br />
          </>
        </>
      )}
    </section>
  );
};
export default About__text;
