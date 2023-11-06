import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ result, answer }) {
  const checkedResult = checkGuess(result, answer)

  return (
    <p className="guess">
      {range(5).map(el => {
        const className = checkedResult === null ? 'cell' : `cell ${checkedResult[el].status}`
        return <span key={Math.random()} className={className}>{
          checkedResult === null ? '' : checkedResult[el].letter
        }</span>
      }
      )}
    </p>
  )
}

export default Guess;
