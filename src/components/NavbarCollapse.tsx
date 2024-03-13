import React, { useState } from 'react';
import { useDarkMode } from '../app/context/DarkModeContext';

const NavbarCollapse = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado
  let { isDarkMode } = useDarkMode();

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='nav__collapse mr-[-2.5rem] relative '>
      {/* Botón de la hamburguesa */}
      <button
        className={`w-[2.7rem] h-[2.7rem] text-[2rem] cursor-pointer bg-none border-none border-rad ${isDarkMode ? 'text-[var(--white)]' : 'text-[var(--black)]'}`}
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Contenido del menú desplegable */}
      {isOpen && (
        <div className='burger-menu-content w-[15rem] z-10 top-[100%] right-0 text-[1.4rem] p-[1rem] flex flex-col gap-[1rem] content border-rad shadow absolute '>
          <a href='#proyectos' className='border-rad w-full '>
            Proyectos
          </a>
          <a href='#contacto' className='border-rad w-full px-[0.5rem]'>
            Contacto
          </a>
        </div>
      )}
    </div>
  );
};
export default NavbarCollapse;
