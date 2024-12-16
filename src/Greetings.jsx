import React, { useContext } from 'react';
import { LanguageContext } from './context/LanguageProvider'; // Correct import

function Greetings({ name, age }) {
  const { language } = useContext(LanguageContext); // Correct usage
  return (
    <div className="flex flex-col">
      <span>Your name : {name}</span>
      <span>Your age : {age}</span>
      <span>Preferred Language : {language}</span>
    </div>
  );
}

export default Greetings;
