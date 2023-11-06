import React from 'react';

function GameOverBanner({ handleRestart }) {
  return (
    <div className='over banner'>
      <p className='game-over'>GAME OVER</p>
      <p>Would you like to restart?</p>
      <button className='restart' onClick={handleRestart}>Restart Game</button>
    </div>

  )
}

export default GameOverBanner;
