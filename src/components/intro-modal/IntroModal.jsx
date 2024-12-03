import React, { useState } from "react";
import "./IntroModal.scss";

const IntroModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="intro-modal-overlay">
      <div className="intro-modal-content">
        <h2>Welcome to Wordle!</h2>
        <p>Here are the rules:</p>
        <ul>
          <li>Guess the 5-letter word in 5 tries or less.</li>
          <li>Each guess must be a valid 5-letter word.</li>
          <li>
            Feedback will be provided for each guess:
            <ul>
              <li><strong>Green:</strong> Correct letter in the correct position.</li>
              <li><strong>Yellow:</strong> Correct letter in the wrong position.</li>
              <li><strong>Gray:</strong> Incorrect letter.</li>
            </ul>
          </li>
        </ul>
        <p>Good luck and have fun!</p>
        <button onClick={closeModal}>Got it!</button>
      </div>
    </div>
  );
};

export default IntroModal;
