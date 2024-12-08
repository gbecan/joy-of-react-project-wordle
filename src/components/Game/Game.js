import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function submitGuess(guess) {
    setGuesses([...guesses, { id: crypto.randomUUID(), word: guess }]);
  }

  const gameWon = guesses[guesses.length - 1]?.word === answer;
  const gameHasEnded = gameWon || guesses.length >= 6;

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput submitGuess={submitGuess} disabled={gameHasEnded} />
      {gameHasEnded && (
        <Banner success={gameWon}>
          {gameWon ? (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guesses.length} guesses</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;
