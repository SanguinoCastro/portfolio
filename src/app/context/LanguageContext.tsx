'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: React.ReactNode;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>('es'); // Español por defecto

  useEffect(() => {
    // Detectar el idioma del navegador
    const browserLanguage = navigator.language.split('-')[0]; // Obtiene el idioma sin el código de país

    // Verificar si el idioma del navegador está soportado, de lo contrario, usa el idioma predeterminado 'es'
    const supportedLanguages = ['es', 'ca', 'en']; // Idiomas soportados
    const defaultLanguage = supportedLanguages.includes(browserLanguage)
      ? browserLanguage
      : 'en';

    // Establecer el idioma inicial
    setLanguage(localStorage.getItem('preferredLanguage') || defaultLanguage);
  }, []);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage); // Guardar la preferencia de idioma en localStorage
  };

  const contextValue: LanguageContextType = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      'useLanguage debe ser utilizado dentro de un LanguageProvider'
    );
  }
  return context;
};
