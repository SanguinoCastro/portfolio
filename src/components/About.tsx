import Image from 'next/image';
import avatar from '../assets/images/Avatar.png';
import linkedin from '../assets/icons/LinkedIn.svg';
import github from '../assets/icons/GitHub.svg';
import Link from 'next/link';

const About = () => {
  return (
    <article className='h-full w-full p-[2rem] flex flex-col justify-center items-center gap-[2rem]'>
      <div className=' flex justify-center items-center gap-[2rem]'>
        <section>
          {' '}
          <Image src={avatar} width={344} alt='Avatar' priority={true} />{' '}
        </section>
        <section className='text-left w-[100%]'>
          <h3>
            <span className='capital'>E</span>duard{' '}
            <span className='capital'>S</span>anguino
          </h3>
          <p className='text-[2rem]'>FrontEnd Developer</p>
          <br />
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
        </section>
      </div>
      <div className=' flex justify-center items-center mt-[1rem] ml-[16.5rem]'>
        <section className='flex justify-center items-center gap-[2rem]'>
          <button className='olive w-[25.3rem] h-[5rem] border-rad text-[1.8rem] transition-all duration-300'>
            ¡Contáctame!
          </button>
          <Link href={'#'}>
            <Image src={linkedin} width={45} alt='Linkedin' />
          </Link>
          <Link href={'#'}>
            <Image src={github} width={45} alt='GitHub' />
          </Link>
        </section>
      </div>
    </article>
  );
};
export default About;
