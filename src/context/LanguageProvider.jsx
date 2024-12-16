
import React, { createContext, useState } from 'react';

// Create the Context
export const LanguageContext = createContext(); // Exported correctly here

// Provide the Context to Components
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('Englilsh'); // Default language

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
