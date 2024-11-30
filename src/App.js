import React from 'react';
import Header from './components/header/Header';
import WordleBoard from './components/wordle-board/WordleBoard';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <WordleBoard />
    </div>
  );
}

export default App;
