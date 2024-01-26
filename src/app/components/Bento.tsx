import About from './About';

const Bento = () => {
  return (
    <div className='grid__container  w-full h-[241.8rem] grid grid-cols-6  gap-[2rem] mt-[2rem]'>
      <div className='grid__me content shadow border-rad col-start-1 col-end-5 row-start-1 row-end-3'>
        <About />
      </div>
      <div className='grid__theme content shadow border-rad'>Dark Mode</div>
      <div className='grid__lang content shadow border-rad'>Idioma</div>
      <div className='grid__dice col-start-5 col-end-7 row-start-2 row-end-4 content shadow border-rad'>
        Dado
      </div>
      <div className='grid__map col-start-1 col-end-3 content shadow border-rad'>
        Mapa
      </div>
      <div className='grid__weather col-start-3 col-end-5 content shadow border-rad'>
        Weather App
      </div>
      <div className='grid__projects col-start-1 col-end-7 row-start-4 row-end-5 content shadow border-rad'>
        Trabajos y Proyectos
      </div>
      <div className='grid__skills col-start-1 col-end- content shadow border-rad'>
        Skills
      </div>
      <div className='grid__animation col-start-1 col-end- content shadow border-rad'>
        Animación
      </div>
      <div className='grid__contact col-start-1 col-end-3 content shadow border-rad'>
        Contacto
      </div>
      <div className='grid__form col-start-3 col-end- row-start-7 row-end-9 content shadow border-rad'>
        Formulario
      </div>
      <div className='grid__cv col-start-1 col-end-3 content shadow border-rad'>
        CV
      </div>
    </div>
  );
};
export default Bento;
