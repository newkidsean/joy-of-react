import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessResults({ guessResults, answer }) {
  const cellForWords = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {cellForWords.map(cell => (
        <Guess key={Math.random()} result={guessResults[cell]} answer={answer} />
      ))}
    </div>
  )
}

export default GuessResults;
