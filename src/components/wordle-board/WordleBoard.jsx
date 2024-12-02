import React, { useState } from "react";
import "./WordleBoard.scss";

const WordleBoard = ({ guesses, feedback, onGuess, currentRow }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    if (value.length <= 5) setCurrentGuess(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentGuess.length === 5) {
      onGuess(currentGuess);
      setCurrentGuess("");
    }
  };

  return (
    <div className="wordle-board">
      {[...Array(5)].map((_, rowIndex) => (
        <div key={rowIndex} className="wordle-row">
          {[...Array(5)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`wordle-cell ${
                feedback[rowIndex]?.[colIndex] || ""
              }`}
            >
              {rowIndex === currentRow && colIndex < currentGuess.length
                ? currentGuess[colIndex]
                : guesses[rowIndex][colIndex] || ""}
            </div>
          ))}
        </div>
      ))}
      <input
        type="text"
        value={currentGuess}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="wordle-input"
        placeholder="Type your guess"
        autoFocus
      />
    </div>
  );
};

export default WordleBoard;
