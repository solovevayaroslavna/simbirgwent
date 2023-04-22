import React from 'react';
import './gameArea.css';

function GameArea() {
  return (
    <div className="game-area">
      <div className="circle">1</div>
      <div className="game-area-block" id="block1"> </div>
      <div className="circle">2</div>
      <div className="game-area-block" id="block2"> </div>
      <div className="circle">3</div>
      <div className="game-area-block" id="block3"> </div>
      <div className="circle">4</div>
      <div className="game-area-block" id="block4"> </div>
      <div className="circle">5</div>
      <div className="game-area-block" id="block5"> </div>
      <div className="circle">6</div>
      <div className="game-area-block" id="block6"> </div>
    </div>
  );
}

export default GameArea;
