'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {useDarkMode} from '../app/context/DarkModeContext';
import moon from '../assets/icons/moon.png';
import sun from '../assets/icons/sun.png';

const Dark_Mode = () => {
  // Comprobamos cuál es la preferencia de modo del usuario:
  // const isDarkModePreferred = window.matchMedia(
  //   '(prefers-color-scheme: dark)'
  // ).matches;

  // // Comprobamos si hay una preferencia guardada en el localStorage:
  // const storedThemePreference = localStorage.getItem('themePreference');

  // // Establecemos el modo inicial en el que se cargará la web, tomando de referencia primero si hay configuración guardada en el local storage y sino toma la preferencia del navegador/ sistema Operativo:
  // const initialDarkMode =
  //   storedThemePreference === 'true' ||
  //   (!storedThemePreference && isDarkModePreferred);

  // Creación del useState que controlara el modo css y sus estilos
  let {isDarkMode, toggleDarkMode}= useDarkMode();


  useEffect(() => {
    const body = document.body;

    if (!isDarkMode) {
      body.classList.add('light');
      localStorage.setItem('themePreference', 'false');
    } else {
      body.classList.remove('light');
      localStorage.setItem('themePreference', 'true');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    if (isDarkMode !== !isDarkMode) {
      toggleDarkMode();
    }
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
            <Image src={moon} width={400} alt='Modo oscuro' />
          ) : (
            <Image
              src={sun}
              width={500}
              alt='Modo claro'
              className='w-[20rem]'
            />
          )}
        </div>
      </label>
    </article>
  );
};
export default Dark_Mode;
