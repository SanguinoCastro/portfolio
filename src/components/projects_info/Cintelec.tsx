import { useLanguage } from '@/app/context/LanguageContext';
const Cintelec = () => {
  const { language } = useLanguage();
  return (
    <>
      {language === 'es' ? (
        <>
          <h3 className='center'>Página web corporativa de Cintelec.S.L</h3>

          <p>
            La empresa Cintelec me contactó para desarrollar su página web
            corporativa dándome total libertad para su desarrollo y diseño.
          </p>

          <p>
            La empresa necesitaba una web para informar brevemente de los
            servicios que ofrece, un apartado de contacto, una galería para
            mostrar sus trabajos y un formulario para solicitar empleo.
          </p>

          <h4 className='center'>Desarrollo</h4>

          <p>
            He desarrollado la web con Next.js, TypeScript, Tailwind y un
            pequeño apartado backend realizado con nodemailer para el envío de
            formularios con archivos adjuntos.
          </p>

          <a
            href='https://cintelec.com'
            className='button border-rad olive flex justify-center items-center text-[2rem] h-[5rem] w-[15rem] mx-auto mt-[2rem]'
          >
            Visita la web
          </a>
        </>
      ) : language === 'ca' ? (
        <>
          <h3 className='center'>Pàgina web corporativa de Cintelec.S.L</h3>

          <p>
            L'empresa Cintelec em va contactar per desenvolupar la seva pàgina
            web corporativa donant-me total llibertat pel seu desenvolupament i
            disseny.
          </p>

          <p>
            L'empresa necessitava una web per informar breument dels serveis que
            ofereix, una secció de contacte, una galeria per mostrar els seus
            treballs i un formulari per sol·licitar feina.
          </p>

          <h4 className='center'>Desenvolupament</h4>

          <p>
            He desenvolupat la web amb Next.js, TypeScript, Tailwind i una
            petita secció backend realitzada amb nodemailer per a l'enviament de
            formularis amb fitxers adjunts.
          </p>

          <a
            href='https://cintelec.com'
            className='button border-rad olive flex justify-center items-center text-[2rem] h-[5rem] w-[15rem] mx-auto mt-[2rem]'
          >
            Visita la web
          </a>
        </>
      ) : (
        <>
          <h3 className='center'>Cintelec Corporate Web Page</h3>

          <p>
            Cintelec was contacted to develop their corporate web page, giving
            me full freedom to design and develop.
          </p>

          <p>
            Cintelec needed a web to inform about the services they offer, a
            contact section, a gallery to show their work and a form to request
            work.
          </p>

          <h4 className='center'>Development</h4>

          <p>
            I developed the web with Next.js, TypeScript, Tailwind and a small
            backend project done with nodemailer to send forms with attachments.
          </p>

          <a
            href='https://cintelec.com'
            className='button border-rad olive flex justify-center items-center text-[2rem] h-[5rem] w-[15rem] mx-auto mt-[2rem]'
          >
            Visit the web
          </a>
        </>
      )}
    </>
  );
};
export default Cintelec;
