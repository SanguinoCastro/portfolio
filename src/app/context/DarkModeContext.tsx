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
