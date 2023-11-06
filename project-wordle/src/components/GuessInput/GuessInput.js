import React, { useState } from 'react';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import { LOSE, RUNNING, WIN } from '../../constants';

function GuessInput({ handleAddGuess, gameStatus, guessCount, answer }) {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    const upperInput = event.target.value.toUpperCase();
    setInputValue(upperInput);
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    if (inputValue.length !== 5) return;

    console.log({ guess: inputValue });
    handleAddGuess(inputValue);
    setInputValue('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      {gameStatus === RUNNING ? (
        <input
          id="guess-input"
          type="text"
          value={inputValue}
          onChange={handleInput}
          maxLength={5}
          required
          disabled={gameStatus === WIN || gameStatus === LOSE}
        />
      ) : (
        gameStatus === WIN ? (
          <HappyBanner guessCount={guessCount} />
        ) : (
          <SadBanner answer={answer} />
        )
      )}
    </form>
  )
}

export default GuessInput;
