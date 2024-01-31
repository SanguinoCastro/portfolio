'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import moon from '../assets/icons/moon.png';
import sun from '../assets/icons/sun.png';

const Dark_Mode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const body = document.body;

    if (!isDarkMode) {
      body.classList.add('light');
    } else {
      body.classList.remove('light');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
    console.log(isDarkMode);
  };

  // useEffect(() => {
  //   const toggleButton = document.getElementById('toggle-button');

  //   const handleChange = () => {
  //     document.body.classList.toggle('light');
  //   };

  //   toggleButton?.addEventListener('change', handleChange);

  //   return () => {
  //     toggleButton?.removeEventListener('change', handleChange);
  //   };
  // }, []);

  return (
    <article className='grid'>
      <input id='toggle-button' type='checkbox' className='darkMode__input' />
      <label
        htmlFor='toggle-button'
        className={`darkMode__label flex items-center`}
        onClick={handleToggle}
      >
        <div className='sun-moon'>
          {isDarkMode ? (
            <Image src={moon} width={400} alt='profile' />
          ) : (
            <Image src={sun} width={500} alt='profile' className='w-[20rem]' />
          )}
        </div>
      </label>
    </article>
  );
};
export default Dark_Mode;
