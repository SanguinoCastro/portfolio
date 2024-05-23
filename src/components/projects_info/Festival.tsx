import { useLanguage } from '@/app/context/LanguageContext';
const Festival = () => {
  const { language } = useLanguage();
  return (
    <>
      {language === 'es' ? (
        <>
          <h3 className='center'>Metal & Rock Festival</h3>

          <p>
            Como practica de un curso de Udemy hice esta página web que pretende
            ser la página web de un Festival musical de Metal y Rock ficticio.
          </p>

          <p>
            En el curso de Udemy impartido por el profesor Juan de la torre se
            hacia una version de esta página web pero ambientada en música
            techno y EDM, yo aparte de cambiar el tema he añadido distintos
            cambios, como la paginación de imágenes y el menú desplegable en
            formato móvil, el botón para volver al inicio, la iconografía de los
            boletos, un cambio de tipografía y otros cambios visuales para darle
            un estilo mas personal.
          </p>

          <h4 className='center'>Desarrollo</h4>

          <p>
            He desarrollado la web como práctica de SaSS, Gulp, JavaScript y
            Html5.
          </p>

          <a
            href='https://sanguinocastro.github.io/MusicalFestival/'
            className='button border-rad olive flex justify-center items-center text-[2rem] h-[5rem] w-[15rem] mx-auto mt-[2rem]'
          >
            Visita la web
          </a>
        </>
      ) : language === 'ca' ? (
        <>
          <h3 className='center'>Metal & Rock Festival</h3>

          <p>
            Com a pràctica d'un curs d'Udemy, vaig fer aquesta pàgina web que
            pretén ser la pàgina web d'un festival musical fictici de Metal i
            Rock.
          </p>

          <p>
            Al curs d'Udemy impartit pel professor Juan de la Torre es feia una
            versió d'aquesta pàgina web, però ambientada en música techno i EDM.
            Jo, a més de canviar el tema, he afegit diferents canvis, com la
            paginació d'imatges i el menú desplegable en format mòbil, el botó
            per tornar a l'inici, la iconografia dels tiquets, un canvi de
            tipografia i altres canvis visuals per donar-li un estil més
            personal.
          </p>

          <h4 className='center'>Desenvolupament</h4>

          <p>
            He desenvolupat la web com a pràctica de SaSS, Gulp, JavaScript i
            Html5.
          </p>

          <a
            href='https://sanguinocastro.github.io/MusicalFestival/'
            className='button border-rad olive flex justify-center items-center text-[2rem] h-[5rem] w-[15rem] mx-auto mt-[2rem]'
          >
            Visita la web
          </a>
        </>
      ) : (
        <>
          <h3 className='center'>Metal & Rock Festival</h3>

          <p>
            As a practice project from a Udemy course, I created this website
            which is meant to be the site for a fictional Metal and Rock music
            festival.
          </p>

          <p>
            In the Udemy course taught by professor Juan de la Torre, a version
            of this website was made but focused on techno and EDM music.
            Besides changing the theme, I added various modifications such as
            image pagination and the mobile dropdown menu, the back to top
            button, ticket iconography, a font change, and other visual changes
            to give it a more personal style.
          </p>

          <h4 className='center'>Development</h4>

          <p>
            I developed the website as a practice project for SaSS, Gulp,
            JavaScript, and Html5.
          </p>

          <a
            href='https://sanguinocastro.github.io/MusicalFestival/'
            className='button border-rad olive flex justify-center items-center text-[2rem] h-[5rem] w-[15rem] mx-auto mt-[2rem]'
          >
            Visit the website
          </a>
        </>
      )}
    </>
  );
};
export default Festival;
