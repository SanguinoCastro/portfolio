import Image from 'next/image';
import avatar from '../assets/images/Avatar.png';
import linkedin from '../assets/icons/LinkedIn.svg';
import github from '../assets/icons/GitHub.svg';
import Link from 'next/link';
import About__text from './About__text';
import About__button from './About__button';

const About = () => {
  return (
    <article className='h-full w-full p-[2rem] flex flex-col justify-center items-center gap-[2rem]'>
      <div className='about__containerUp  flex justify-center items-center gap-[5rem]'>
        <section className='about__avatar min-w-[20rem]'>
          {' '}
          <Image src={avatar} width={200} alt='Avatar' priority={true} />{' '}
        </section>
        <About__text />
      </div>
      <div className=' about__containerBottom flex justify-center items-center mt-[1rem] ml-[16.5rem]'>
        <section className='flex justify-center items-center gap-[2rem]'>
          <About__button />
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
