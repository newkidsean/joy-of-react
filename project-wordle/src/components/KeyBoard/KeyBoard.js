import React from 'react';
import { KEYBOARD_ALPHABET } from '../../constants';
import { guessFlatter, checkGuess } from '../../game-helpers'
import KeyBoardRow from '../KeyBoardRow/KeyBoardRow';

function KeyBoard({ guessResults, answer }) {
  const chosenKeyBoard = guessFlatter(guessResults);
  const checkedResult = checkGuess(chosenKeyBoard, answer);

  return (
    <div>
      {KEYBOARD_ALPHABET.map((row, index) => (
        <KeyBoardRow key={index} row={row} checkedResult={checkedResult} />
      ))}
    </div>
  )

}

export default KeyBoard;
