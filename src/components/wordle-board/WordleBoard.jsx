import React from 'react';
import './WordleBoard.scss';

const WordleBoard = () => {
  return (
    <div className="wordle-board">
      {[...Array(5)].map((_, rowIndex) => (
        <div key={rowIndex} className="wordle-row">
          {[...Array(5)].map((_, colIndex) => (
            <div key={colIndex} className="wordle-cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordleBoard;
