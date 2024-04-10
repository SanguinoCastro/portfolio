'use client';
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

// export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
//   children,
// }) => {
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
//     const storedThemePreference =
//       typeof window !== 'undefined'
//         ? localStorage.getItem('themePreference')
//         : null;
//     const isDarkModePreferred =
//       typeof window !== 'undefined' &&
//       window.matchMedia('(prefers-color-scheme: dark)').matches;
//     return storedThemePreference !== null
//       ? storedThemePreference === 'true'
//       : isDarkModePreferred;
//   });

//   useEffect(() => {
//     localStorage.setItem('themePreference', isDarkMode.toString());
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
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

// 'use client';
import React, { createContext, useState, useContext } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
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
// const isDarkModePreferred = window.matchMedia(
//   '(prefers-color-scheme: dark)'
// ).matches;

// Comprobamos si hay una preferencia guardada en el localStorage:
const storedThemePreference = localStorage.getItem('themePreference');

// Establecemos el modo inicial en el que se cargará la web, tomando de referencia primero si hay configuración guardada en el local storage y sino toma la preferencia del navegador/ sistema Operativo:
const initialDarkMode =
  storedThemePreference === 'true' ||
  (!storedThemePreference && isDarkModePreferred);
export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
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
