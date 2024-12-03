import { useState } from "react";
import wordList from "../assets/wordList.json";

const useWordleGame = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [guesses, setGuesses] = useState(Array(5).fill(""));
  const [feedback, setFeedback] = useState(Array(5).fill([]));
  const [currentRow, setCurrentRow] = useState(0);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const targetWord = wordList[currentWordIndex]?.toUpperCase() || "";

  const handleGuess = (guess) => {

    const feedbackRow = Array(5).fill("");
    const targetChars = targetWord.split("");
    const guessChars = guess.split("");

    guessChars.forEach((char, index) => {
      if (char === targetChars[index]) {
        feedbackRow[index] = "green";
        targetChars[index] = null;
        console.log("Generate feedback 1: ", feedbackRow);
      }
    });

    guessChars.forEach((char, index) => {
      if (feedbackRow[index] !== "green" && targetChars.includes(char)) {
        feedbackRow[index] = "yellow";
        targetChars[targetChars.indexOf(char)] = null;
        //console.log("Generated feedback 2:", feedbackRow);
      }
    });

    const updatedGuesses = [...guesses];
    updatedGuesses[currentRow] = guess;
    setGuesses(updatedGuesses);

    const updatedFeedback = [...feedback];
    updatedFeedback[currentRow] = feedbackRow;
    setFeedback(updatedFeedback);

    if (guess.toUpperCase() === targetWord) {
      openModal("Congratulations! You guessed the word!");
      if (currentWordIndex < wordList.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
        resetGameState();
      } else {
        openModal("You’ve completed the game!");
        resetGameState(true);
      }
      return;
    }

    setCurrentRow(currentRow + 1);

    if (currentRow === 4) {
      openModal(`The word was: ${targetWord}`);
      if (currentWordIndex < wordList.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
        resetGameState();
      } else {
        openModal("You've completed the game!");
        resetGameState(true);
      }
    }
  };

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resetGameState = (restart = false) => {
    setGuesses(Array(5).fill(""));
    setFeedback(Array(5).fill([]));
    setCurrentRow(0);
    if (restart) setCurrentWordIndex(0);
  };

  return {
    wordList,
    guesses,
    feedback,
    currentRow,
    modalMessage,
    isModalOpen,
    handleGuess,
    closeModal,
    resetGameState,
  };
};

export default useWordleGame;
