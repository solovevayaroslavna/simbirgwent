import React from 'react';
import { GameArea } from './gameArea';
import { GameCardArea } from './gameCardArea';
import { CardsPanel } from './cardsPanel';
import { CardsList } from './cardsList/index';
import { CommonGameAreaWrapper } from './commonGameAreaStyles';

export function CommonGameArea() {
  return (
    <CommonGameAreaWrapper>
      <GameArea />
      <GameCardArea />
      <CardsList />
      <CardsPanel />
    </CommonGameAreaWrapper>
  );
}
