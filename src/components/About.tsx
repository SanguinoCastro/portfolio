'use client';

import Image from 'next/image';
import avatar from '../assets/images/Avatar.png';
import linkedin from '../assets/icons/LinkedIn--green.svg';
import linkedin__hover from '../assets/icons/LinkedIn.svg';
import github from '../assets/icons/github--green.svg';
import github__hover from '../assets/icons/github.svg';
import Link from 'next/link';
import About__text from './About__text';
import About__button from './About__button';
import { useState } from 'react';

const About = () => {
  const [hoveredLi, setHoveredLi] = useState(false);
  const [hoveredGit, setHoveredGit] = useState(false);
  return (
    <article className='h-full w-full p-[2rem] flex flex-col justify-center items-center gap-[2rem]'>
      <div className='about__containerUp  flex justify-center items-center gap-[5rem]'>
        <section className='about__avatar min-w-[20rem]'>
          {' '}
          <Image src={avatar} width={200} alt='Avatar' priority={true} />{' '}
        </section>
        <About__text />
      </div>
      <div className=' about__containerBottom flex justify-center items-center mt-[0rem] ml-[16.5rem]'>
        <section className='flex justify-center items-center gap-[2rem]'>
          <About__button />
          <Link
            href={'#'}
            onMouseEnter={() => setHoveredLi(true)}
            onMouseLeave={() => setHoveredLi(false)}
          >
            <Image
              src={hoveredLi ? linkedin__hover : linkedin}
              width={45}
              alt='Linkedin'
              className='linkedin'
            />
          </Link>
          <Link
            href={'#'}
            onMouseEnter={() => setHoveredGit(true)}
            onMouseLeave={() => setHoveredGit(false)}
          >
            <Image
              src={hoveredGit ? github__hover : github}
              width={45}
              alt='GitHub'
              className='github'
            />
          </Link>
        </section>
      </div>
    </article>
  );
};
export default About;
