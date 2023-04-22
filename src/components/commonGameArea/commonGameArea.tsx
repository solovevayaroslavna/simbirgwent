import React from 'react';
import GameArea from '../gameArea/gameArea';
import GameCardArea from '../gameCardArea/gameCardArea';
import CardsPanel from '../cardsPanel/cardsPanel';
import CardsList from '../cardsList/cardsList';
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
