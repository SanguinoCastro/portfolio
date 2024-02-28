'use client';

import { useLanguage } from '@/app/context/LanguageContext';

const About__text = () => {
  const { language } = useLanguage();
  return (
    <section className='text-left w-[100%]'>
      <h3>
        <span className='capital'>E</span>duard{' '}
        <span className='capital'>S</span>anguino
      </h3>
      <p className='text-[2rem]'>FrontEnd Developer</p>
      <br />
      {language === 'es' ? (
        <>
          <p>
            ¡Hola! Soy un Geek entusiasta, decidí arriesgarme a un cambio de
            profesión para dedicarme a lo que realmente me apasiona, la
            programación.
          </p>
          <br />
          <p>
            Me especializo en desarrollo con React y Next pero no le tengo miedo
            a nada.
          </p>
          <br />
          <p>
            Si buscas a alguien con ojo al detalle y dedicación no dudes en
            contactarme para realiza tu proyecto.
          </p>
        </>
      ) : language === 'ca' ? (
        <>
          <p>
            Hola! Sóc un entusiasta de la tecnologia, he decidit arriscar-me a
            un canvi de professió per dedicar-me al que realment m'apassiona, la
            programació.
          </p>
          <br />
          <p>
            M' especialitzo en el desenvolupament amb React i Next, però no li
            tinc por a res.
          </p>
          <br />
          <p>
            Si busques algú amb ull per al detall i dedicació, no dubtis a
            contactar-me per realitzar el teu projecte.
          </p>
        </>
      ) : (
        <>
          <p>
            Hello! I'm an enthusiastic geek who decided to take the leap into a
            career change to pursue what I'm truly passionate about,
            programming.
          </p>
          <br />
          <p>
            I specialize in development with React and Next, but I'm not afraid
            of anything.
          </p>
          <br />
          <p>
            If you're looking for someone with an eye for detail and dedication,
            don't hesitate to contact me to carry out your project.
          </p>
        </>
      )}
    </section>
  );
};
export default About__text;
