'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: (newPreference: boolean) => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error(
      'useDarkMode debe ser utilizado dentro de un DarkModeProvider'
    );
  }
  return context;
};

interface DarkModeProviderProps {
  children: React.ReactNode;
}

var isDarkModePreferred = false;
if (typeof window !== 'undefined') {
  isDarkModePreferred = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
}

// Establecemos el modo inicial en el que se cargará la web, tomando de referencia primero si hay configuración guardada en el local storage y sino toma la preferencia del navegador/ sistema Operativo:

console.log('tipo de window:' + typeof window);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (localStorage !== null) {
      const storedPreference = localStorage.getItem('themePreference');
      if (storedPreference !== null) {
        return storedPreference === 'true';
      } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('themePreference', isDarkMode.toString());
    }
  }, [isDarkMode]);

  const toggleDarkMode = (newPreference: boolean) => {
    setIsDarkMode((prevIsDarkMode) => {
      const updatedPreference =
        newPreference !== undefined ? newPreference : !prevIsDarkMode;
      return updatedPreference;
    });
  };

  const value: DarkModeContextType = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
// import React, { createContext, useState, useContext, useEffect } from 'react';

// interface DarkModeContextType {
//   isDarkMode: boolean;
//   toggleDarkMode: () => void;
// }

// const DarkModeContext = createContext<DarkModeContextType | undefined>(
//   undefined
// );

// export const useDarkMode = () => {
//   const context = useContext(DarkModeContext);
//   if (!context) {
//     throw new Error(
//       'useDarkMode debe ser utilizado dentro de un DarkModeProvider'
//     );
//   }
//   return context;
// };

// interface DarkModeProviderProps {
//   children: React.ReactNode;
// }

// var isDarkModePreferred = false;
// if (typeof window !== 'undefined') {
//   isDarkModePreferred = window.matchMedia(
//     '(prefers-color-scheme: dark)'
//   ).matches;
// }

// // Establecemos el modo inicial en el que se cargará la web, tomando de referencia primero si hay configuración guardada en el local storage y sino toma la preferencia del navegador/ sistema Operativo:

// console.log('tipo de window:' + typeof window);

// export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
//   children,
// }) => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
//     const storedThemePreference = localStorage.getItem('themePreference');
//     const isDarkModePreferred =
//       typeof window !== 'undefined' &&
//       window.matchMedia('(prefers-color-scheme: dark)').matches;
//     return (
//       storedThemePreference === 'true' ||
//       (!storedThemePreference && isDarkModePreferred)
//     );
//   });

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   useEffect(() => {
//     if (window === undefined) return;
//     localStorage.setItem('themePreference', isDarkMode.toString());
//   }, [isDarkMode]);

//   const value: DarkModeContextType = {
//     isDarkMode,
//     toggleDarkMode,
//   };

//   return (
//     <DarkModeContext.Provider value={value}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };
