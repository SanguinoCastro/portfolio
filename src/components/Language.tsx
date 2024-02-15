import Image from 'next/image';
import español from '../assets/flags/español.svg';

const Language = () => {
  return (
    <article className='flex flex-col gap-[1rem]'>
      <div className='flex text-[1.2rem]'>
        <div className=' w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-full absolute top-[13.5rem] right-[19.5rem] border lang-active'>
          ES
        </div>

        <div className='w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-full absolute top-[14.5rem] right-[15.5rem] border'>
          CAT
        </div>

        <div className='w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-full absolute top-[18.2rem] right-[13.7rem] border'>
          ENG
        </div>
      </div>
      <div className='w-[7rem] h-[7rem] flex justify-center items-center  rounded-full overflow-hidden mr-[1.5rem]'>
        <Image
          src={español}
          width={700}
          alt='Español'
          className='scale-[150%]'
        />
      </div>
    </article>
  );
};
export default Language;
