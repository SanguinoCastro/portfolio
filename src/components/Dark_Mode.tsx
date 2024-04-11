'use client';

import Image from 'next/image';
import { useDarkMode } from '../app/context/DarkModeContext';
import moon from '../assets/icons/moon.png';
import sun from '../assets/icons/sun.png';

const Dark_Mode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleToggle = () => {
    toggleDarkMode(!isDarkMode);
  };

  return (
    <article className='grid'>
      <input
        id='toggle-button'
        type='checkbox'
        className='darkMode__input'
        checked={!isDarkMode}
        onChange={handleToggle}
      />
      <label
        htmlFor='toggle-button'
        className={`darkMode__label flex items-center`}
      >
        <div className='sun-moon'>
          {isDarkMode ? (
            <Image src={moon} width={400} alt='Modo oscuro' className='moon' />
          ) : (
            <Image
              src={sun}
              width={500}
              alt='Modo claro'
              className='w-[20rem] sun'
            />
          )}
        </div>
      </label>
    </article>
  );
};

export default Dark_Mode;
