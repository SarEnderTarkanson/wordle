export const generateFeedback = (guess, targetWord) => {
    const feedbackRow = Array(5).fill("");
    const targetChars = targetWord.split("");
    const guessChars = guess.split("");
  
    guessChars.forEach((char, index) => {
      if (char === targetChars[index]) {
        feedbackRow[index] = "green";
        targetChars[index] = null;
      }
    });
  
    guessChars.forEach((char, index) => {
      if (feedbackRow[index] !== "green" && targetChars.includes(char)) {
        feedbackRow[index] = "yellow";
        targetChars[targetChars.indexOf(char)] = null;
      }
    });
  
    return feedbackRow;
  };
  