import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { LOSE, RUNNING, WIN } from '../../constants';
import KeyBoard from '../KeyBoard/KeyBoard';
import { guessFlatter } from '../../game-helpers'
import GameOverBanner from '../GameOverBanner/GameOverBanner'
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const [gameStatus, setGameStatus] = useState(RUNNING);
  const [answer, setAnswer] = useState(() => sample(WORDS));

  const handleAddGuess = (inputValue) => {
    const newGuessResults = [...guessResults, inputValue];
    setGuessResults(newGuessResults);

    if (inputValue === answer) {
      setGameStatus(WIN)
    }
    if (inputValue !== answer && newGuessResults.length === 6) {
      setGameStatus(LOSE)
    }
  }

  const handleRestart = () => {
    setGameStatus(RUNNING);
    setGuessResults([]);
    setAnswer(sample(WORDS))
  }
  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} guessCount={guessResults.length} answer={answer} />
      <KeyBoard guessResults={guessResults} answer={answer} />
      {(gameStatus === LOSE || gameStatus === WIN) && <GameOverBanner handleRestart={handleRestart} />}
    </>
  )
}

export default Game;
