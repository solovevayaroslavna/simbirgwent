import React from 'react';
import {
  GameArea, GameCardArea, CardsPanel, CardsList,
} from './index';
import './commonGameArea.css';

function CommonGameArea() {
  return (
    <div className="common-game-area">
      <GameArea />
      <GameCardArea />
      <CardsPanel />
      <CardsList />
    </div>
  );
}

export default CommonGameArea;
