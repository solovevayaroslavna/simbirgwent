import React from 'react';
import { GameArea } from '../gameArea/index';
import { GameCardArea } from '../gameCardArea/index';
import { CardsPanel } from '../cardsPanel/index';
import { CardsList } from '../cardsList/index';
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
