'use client';

import { useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import Privacity__text from '@/components/Privacity__text';
import Header__privacity from '@/components/Header__privacity';

const page = () => {
  let { isDarkMode } = useDarkMode();

  useEffect(() => {
    // Verificar si estamos en el entorno del cliente
    if (typeof window !== 'undefined') {
      const body = document.body;

      // if (isDarkMode) {
      //   body.classList.add('light');
      //   localStorage.setItem('themePreference', 'true');
      // } else {
      //   body.classList.remove('light');
      //   localStorage.setItem('themePreference', 'false');
      // }
    }
  }, []); // Asegúrate de ejecutar este efecto cada vez que isDarkMode cambie

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
