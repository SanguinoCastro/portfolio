import Image from 'next/image';
import image2 from '../assets/images/imagen2.png';

const Animation = () => {
  return (
    <div className='content__animation flex justify-center items-center px-[0.9rem] overflow-hidden'>
      <Image
        src={image2}
        alt='dice'
        width={1110}
        className='border-rad inner__shadow w-[100%]'
      />
    </div>
  );
};
export default Animation;
