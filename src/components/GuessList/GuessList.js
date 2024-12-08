import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, word }) => (
        <p key={id} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
