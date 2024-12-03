import { generateFeedback } from "../utils/generateFeedback";

describe("generateFeedback", () => {
  it("assigns green for correct letters in correct positions", () => {
    const guess = "water";
    const targetWord = "water";

    const result = generateFeedback(guess, targetWord);

    expect(result).toEqual(["green", "green", "green", "green", "green"]);
  });

  it("assigns yellow for correct letters in incorrect positions", () => {
    const guess = "terwa";
    const targetWord = "water";

    const result = generateFeedback(guess, targetWord);

    expect(result).toEqual(["yellow", "yellow", "yellow", "yellow", "yellow"]);
  });

  it("handles mixed green and yellow feedback", () => {
    const guess = "wager";
    const targetWord = "water";

    const result = generateFeedback(guess, targetWord);

    expect(result).toEqual(["green", "green", "", "green", "green"]);
  });

  it("handles guesses with duplicate letters", () => {
    const guess = "otter";
    const targetWord = "water";

    const result = generateFeedback(guess, targetWord);

    expect(result).toEqual(["", "", "green", "green", "green"]);
  });

  it("handles completely incorrect guesses", () => {
    const guess = "xxxxx";
    const targetWord = "water";

    const result = generateFeedback(guess, targetWord);

    expect(result).toEqual(["", "", "", "", ""]);
  });
});
