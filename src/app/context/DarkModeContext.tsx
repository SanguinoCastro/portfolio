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

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('themePreference');
    setIsDarkMode(storedPreference === 'true');
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.remove('light');
    } else {
      body.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = (newPreference: boolean) => {
    setIsDarkMode(newPreference);
    localStorage.setItem('themePreference', newPreference.toString());
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
//   toggleDarkMode: (newPreference: boolean) => void;
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

// export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
//   children,
// }) => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
//     if (typeof window !== 'undefined') {
//       const storedPreference = window.localStorage.getItem('themePreference');
//       if (storedPreference !== null) {
//         return storedPreference === 'true';
//       }
//       return window.matchMedia('(prefers-color-scheme: dark)').matches;
//     }
//     return false;
//   });

//   useEffect(() => {
//     const body = document.body;
//     if (isDarkMode) {
//       body.classList.remove('light');
//     } else {
//       body.classList.add('light');
//     }
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('themePreference', isDarkMode.toString());
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = (newPreference: boolean) => {
//     setIsDarkMode(newPreference);
//   };

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
