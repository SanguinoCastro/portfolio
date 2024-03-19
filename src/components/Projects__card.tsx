'use client';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { useState } from 'react';
import Projects__details from './Projects__details';

const Projects__card = ({
  image,
  imageAlt,
  tech,
  description,
  title,
  link,
  text,
}: {
  image: StaticImageData;
  imageAlt: string;
  tech: string[];
  description: string;
  title: string;
  link: string;
  text: ReactNode;
}) => {
  const [open, setOpen] = useState(false); // Cambiar a false tras el diseño

  const toggleVisor = () => {
    setOpen(!open);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleVisor();
    }
  };
  return (
    <section className='grid__jobs grid grid-cols-1 w-full h-[80%]  justify-center items-center'>
      <article className='grid__article w-[34rem] h-[34rem] m-auto   grid grid-rows-2 shadow'>
        <div className='card__image  h-full overflow-hidden'>
          <Image
            src={image}
            alt={imageAlt}
            height={500}
            className='h-full w-full object-cover object-left'
          />
        </div>
        <div className='card__content  h-full grid grid-rows-2 bg-[var(--primary)]'>
          <div className='content__technologies  flex justify-around items-center'>
            {tech.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt={icon}
                height={500}
                className='tech__icon'
              />
            ))}
          </div>
          <div className='content__description  p-[1.5rem] flex'>
            <p className='text-[var(--white)]'>{description}</p>
            <button
              className='self-end text-[1.4rem] w-[5rem] shadow-none transition-all hover:underline hover:scale-110'
              onClick={toggleVisor}
            >
              +info
            </button>
          </div>
        </div>
      </article>
      <div
        className={`project__visor ${open ? 'zoom-in' : 'zoom-out'} fixed  w-[100%] h-[105%] top-0 left-0 bg-[var(--bg-transparent)] backdrop-blur-sm `}
        onClick={handleBackgroundClick}
      >
        <div className='project__visor__content content relative border-rad shadow  mx-auto my-[12rem] w-[50%] min-w-[73rem] h-[70%]'>
          <button
            onClick={toggleVisor}
            className='absolute right-[2rem] top-[2rem] w-[2rem] h-[2rem] rounded-full'
          >
            X
          </button>
          <Projects__details
            text={text}
            link={link}
            title={title}
            image={image}
            imageAlt={imageAlt}
          />
        </div>
      </div>
    </section>
  );
};
export default Projects__card;
