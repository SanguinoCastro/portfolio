import About from './About';
import ContactForm from './ContactForm';
import Dark_Mode from './Dark_Mode';
import Language from './Language';
import Map from './Map';
import Projects from './Projects';
import Skills from './Skills';
import Weather from './Weather';

const Bento = () => {
  return (
    <div className='grid__container  w-full h-[241.8rem] grid grid-cols-6  gap-[2rem] mt-[2rem]'>
      <div className='grid__me content shadow border-rad col-start-1 col-end-5 row-start-1 row-end-3'>
        <About />
      </div>
      <div className='grid__theme content shadow border-rad'>
        <Dark_Mode />
      </div>
      <div className='grid__lang content shadow border-rad'>
        <Language />
      </div>
      <div className='grid__dice col-start-5 col-end-7 row-start-2 row-end-4 content shadow border-rad'>
        Dado
      </div>
      <div className='grid__map col-start-1 col-end-3 content shadow border-rad flex justify-center items-center p-[1rem]'>
        <Map />
      </div>
      <div className='grid__weather col-start-3 col-end-5 content shadow border-rad'>
        <Weather />
      </div>
      <div className='grid__projects col-start-1 col-end-7 row-start-4 row-end-5 content shadow border-rad'>
        <Projects />
      </div>
      <div className='grid__skills col-start-1 col-end-7 content shadow border-rad'>
        <Skills />
      </div>
      <div className='grid__animation col-start-1 col-end-7 content shadow border-rad'>
        Animación
      </div>
      <div className='grid__contact col-start-1 col-end-3 content shadow border-rad'>
        Contacto
      </div>
      <div className='grid__form col-start-3 col-end-7 row-start-7 row-end-9 content shadow border-rad'>
        <ContactForm />
      </div>
      <div className='grid__cv col-start-1 col-end-3 content shadow border-rad'>
        CV
      </div>
    </div>
  );
};
export default Bento;
