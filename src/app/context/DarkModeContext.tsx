'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

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

const storedThemePreference = localStorage.getItem('themePreference');

// Establecemos el modo inicial en el que se cargará la web, tomando de referencia primero si hay configuración guardada en el local storage y sino toma la preferencia del navegador/ sistema Operativo:
const initialDarkMode =
  storedThemePreference === 'true' ||
  (!storedThemePreference && isDarkModePreferred);
export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedThemePreference = localStorage.getItem('themePreference');
    const isDarkModePreferred =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
      storedThemePreference === 'true' ||
      (!storedThemePreference && isDarkModePreferred)
    );
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem('themePreference', isDarkMode.toString());
  }, [isDarkMode]);

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
