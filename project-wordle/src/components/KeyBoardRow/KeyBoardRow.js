import React from 'react';
import { findLetterStatus } from '../../game-helpers'

function KeyBoardRow({ row, checkedResult }) {

  return (
    <div className='row'>
      {row.map(alphabet => {
        const status = findLetterStatus(alphabet, checkedResult)
        return <span key={alphabet} className={status !== null ? `alphabet ${status}` : 'alphabet'}>{alphabet}</span>
      })}
    </div>
  )
}

export default KeyBoardRow;
