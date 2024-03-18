const Cintelec = () => {
  return (
    <>
      <h3 className='center'>Página web corporativa de Cintelec.S.L</h3>

      <p>
        La empresa Cintelec me contactó para desarrollar su página web
        corporativa dándome total libertad para su desarrollo y diseño.
      </p>

      <p>
        La empresa necesitaba una web para informar brevemente de los servicios
        que ofrece, un apartado de contacto, una galería para mostrar sus
        trabajos y un formulario para solicitar empleo.
      </p>

      <h4 className='center'>Desarrollo</h4>

      <p>
        He desarrollado la web con Next.js, TypeScript, Tailwind y un pequeño
        apartado backend realizado con nodemailer para el envío de formularios
        con archivos adjuntos.
      </p>

      <a
        href='https://cintelec.com'
        className='button border-rad olive flex justify-center items-center text-[2rem] h-[5rem] w-[15rem] mx-auto mt-[2rem]'
      >
        Visita la web
      </a>
    </>
  );
};
export default Cintelec;
