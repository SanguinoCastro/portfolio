import image1 from '../assets/images/imagen1.jpeg';
import image1nopc from '../assets/images/imagen1--nopc.jpeg';
import image1pc from '../assets/images/imagen1--pc.png';

import Image from 'next/image';

const Dice = () => {
  return (
    <div className='content__dice'>
      <article id='article__dice'>
        <Image
          src={image1}
          alt='dice'
          width={350}
          className='background1 border-rad'
        />

        <Image
          src={image1nopc}
          alt='dice'
          width={350}
          id='background--NoPc'
          className=' border-rad'
        />
        <Image src={image1pc} alt='dice' width={350} />
      </article>
    </div>
  );
};

export default Dice;
