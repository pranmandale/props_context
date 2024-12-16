import React from 'react'
import Greetings from './Greetings.jsx';
import{LanguageProvider} from './context/LanguageProvider.jsx'

function App() {

  return (
    <LanguageProvider>
      <Greetings name = {"Pranav Mandale"} age={20}/>
    </LanguageProvider>
  )
}

export default App
