import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

const Projects__details = ({
  title,
  imageAlt,
  image,
  link,
  text,
}: {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  link: string;
  text: ReactNode;
}) => {
  return (
    <div className='visor__content flex w-full px-[2rem] gap-12 items-center justify-around'>
      <iframe
        id={imageAlt}
        title={title}
        width='450'
        height='600'
        src={link}
        className='visor__iframe bg-[var(--white)] border border-black border-rad '
        style={{ overflow: 'hidden' }}
        scrolling='no'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
      ></iframe>

      <div className='visor__image hidden'>
        <Image
          src={image}
          alt={imageAlt}
          height={500}
          className='h-full w-full object-cover object-left'
        />
      </div>
      <div className='visor__text w-[50%] flex flex-col justify-around gap-[2rem]'>
        {text}
      </div>
    </div>
  );
};
export default Projects__details;
