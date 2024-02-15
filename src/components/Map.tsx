'use client';

import Image from 'next/image';
import gps from '../assets/icons/Position.svg';

const Map = () => {
  return (
    <article className=' w-full h-full   flex justify-center items-center border-rad overflow-hidden'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8266.035180413496!2d2.6553533380784633!3d41.6121313044223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb39b04518c207%3A0x56ef369d70456b28!2sCalella%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1706529425274!5m2!1ses!2ses'
        width='350'
        height='155'
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
      <Image
        src={gps}
        width={40}
        alt='GPS'
        className='absolute animate-bounce  cursor-pointer'
        onClick={() => {
          window.open(
            'https://www.google.com/maps/place/Calella,+Barcelona/@41.6121313,2.6553533,17z/data=!3m1!4b1!4m5!3m4!1s0x12bb39b04518c207:0x56ef369d70456b28!8m2!3d41.6121313!4d2.6575423'
          );
        }}
      />
    </article>
  );
};
export default Map;
