import React from "react";
import Header from "./components/header/Header";
import WordleBoard from "./components/wordle-board/WordleBoard";
import CustomModal from "./components/custom-modal/CustomModal";
import IntroModal from "./components/intro-modal/IntroModal";
import useWordleGame from "./hooks/useWordleGame";
import "./App.scss";

function App() {
  const {
    wordList,
    guesses,
    feedback,
    currentRow,
    modalMessage,
    isModalOpen,
    handleGuess,
    closeModal,
  } = useWordleGame();

  return (
    <div className="App">
      <Header />
      {wordList.length > 0 ? (
        <>
          <WordleBoard
            guesses={guesses}
            feedback={feedback}
            onGuess={handleGuess}
            currentRow={currentRow}
          />
          <CustomModal
            isOpen={isModalOpen}
            message={modalMessage}
            onClose={closeModal}
          />
        </>
      ) : (
        <p>Loading word list...</p>
      )}
      <IntroModal />
    </div>
  );
}

export default App;
