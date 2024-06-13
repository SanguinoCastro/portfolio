'use client';

import Image from 'next/image';
import whatsappImg from '../assets/icons/Whatsapp.svg';
import gmailImg from '../assets/icons/Gmail.svg';

const Whatsapp = () => {
  const handleWhatsapp = () => {
    if (typeof window === 'undefined') return;
    if (typeof window !== 'undefined') {
      const whatsappUrl = `whatsapp://send?phone=34689739030`;
      window.open(whatsappUrl);
    }
  };
  const handleGmail = () => {
    if (typeof window === 'undefined') return;
    const gmailUrl = `mailto:eduardsanguinodev@gmail.com`;
    window.location.href = gmailUrl;
  };
  return (
    <>
      <div className='buttons__text flex flex-col gap-[2rem] justify-center items-center'>
        <button
          onClick={handleWhatsapp}
          className='whatsapp__button olive w-[25.21rem] h-[5rem] rounded-xl text-[1.8rem] transition-all duration-300 flex gap-[1rem] justify-center items-center hover:scale-105 px-[2rem]'
        >
          <Image
            src={whatsappImg}
            alt='whatsapp'
            width={27}
            height={27}
            className='ml-[-3.2rem]'
          />
          <span className='ml-[0]'>WhatsApp</span>
        </button>
        <button
          onClick={handleGmail}
          className='gmail__button olive w-[25.3rem] h-[5rem] rounded-xl text-[1.8rem] transition-all duration-300 flex justify-center  gap-[3rem] items-center  hover:scale-105 px-[2rem]'
        >
          <Image
            src={gmailImg}
            alt='Gmail'
            width={27}
            height={27}
            className='ml-[-5.2rem]'
          />
          <span className='mr-[0rem]'>Gmail</span>
        </button>
      </div>

      <div className='buttons__icons hidden gap-5 justify-center items-center'>
        <button
          onClick={handleWhatsapp}
          className='whatsapp__button  w-[6rem] h-[6rem] shadow-none rounded-xl transition-all duration-300 flex justify-center items-center gap-[2rem] hover:scale-105 px-[2rem]'
        >
          <Image
            src={whatsappImg}
            alt='whatsapp'
            width={60}
            height={60}
            className='whatsapp__icon'
          />
        </button>
        <button
          onClick={handleGmail}
          className='gmail__button w-[6rem] h-[6rem] shadow-none rounded-xl transition-all duration-300 flex justify-center items-center gap-[2rem] hover:scale-105 px-[2rem]'
        >
          <Image
            src={gmailImg}
            alt='Gmail'
            width={60}
            height={60}
            className='gmail__icon'
          />
        </button>
      </div>
    </>
  );
};
export default Whatsapp;
