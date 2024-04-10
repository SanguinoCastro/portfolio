'use client';
import { useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import Privacity__text from '@/components/Privacity__text';
import Header__privacity from '@/components/Header__privacity';

const page = () => {
  let { isDarkMode } = useDarkMode();

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add('light');
      localStorage.setItem('themePreference', 'true');
    } else {
      body.classList.remove('light');
      localStorage.setItem('themePreference', 'false');
    }
  }, []);
  return (
    <>
      <Header__privacity />
      <div className='flex justify-center py-[2rem]'>
        <Privacity__text />
      </div>
    </>
  );
};
export default page;
