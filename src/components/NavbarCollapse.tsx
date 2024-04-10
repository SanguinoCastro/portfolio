import React, { useState } from 'react';
import { useDarkMode } from '../app/context/DarkModeContext';
import { useLanguage } from '@/app/context/LanguageContext';

const NavbarCollapse = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado
  let { isDarkMode } = useDarkMode();
  const { language } = useLanguage();

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='nav__collapse mr-[-2.5rem] relative '>
      {/* Botón de la hamburguesa */}
      <button
        className={`w-[4.5rem] h-[4.5rem] text-[3rem] cursor-pointer bg-none shadow-none border-none rounded-full ${isDarkMode ? 'text-[var(--white)]' : 'text-[var(--black)]'}`}
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Contenido del menú desplegable */}
      {isOpen && (
        <div className='burger-menu-content w-[15rem] z-10 top-[100%] right-0 text-[1.4rem] p-[1rem] flex flex-col gap-[1rem] content border-rad shadow absolute '>
          <a href='#proyectos' className='border-rad w-full '>
            {language === 'es'
              ? 'Proyectos'
              : language === 'ca'
                ? 'Projectes'
                : 'Projects'}
          </a>
          <a href='#contacto' className='border-rad w-full px-[0.5rem]'>
            {language === 'es'
              ? 'Contacto'
              : language === 'ca'
                ? 'Contacte'
                : 'Contact'}
          </a>
        </div>
      )}
    </div>
  );
};
export default NavbarCollapse;
