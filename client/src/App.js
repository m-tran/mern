import React from 'react';
import logo from './logo.svg';
import './App.css';

import TranslationList from "./components/TranslationList";
import TranslationInput from "./components/TranslationInput";

function App() {
  const [translation, setTranslation] = useState({
    text: "",
    translationList: [],
  });

  return (
    <div className="App">
      <TranslationInput />
      <TranslationList />
    </div>
  );
}

export default App;
