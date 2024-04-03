import image1 from '../assets/images/imagen1.jpeg';

import Image from 'next/image';

const Dice = () => {
  return (
    <div className='content__dice'>
      <Image
        src={image1}
        alt='dice'
        width={350}
        className='dice border-rad inner__shadow'
      />
    </div>
  );
};

export default Dice;
