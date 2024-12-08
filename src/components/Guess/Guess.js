import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const checkedGuess = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((i) => (
        <span
          key={i}
          className={checkedGuess ? `cell ${checkedGuess[i].status}` : "cell"}
        >
          {checkedGuess ? checkedGuess[i].letter : " "}
        </span>
      ))}
    </p>
  );
}

export default Guess;
