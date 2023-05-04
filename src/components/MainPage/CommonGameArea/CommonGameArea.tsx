import React from 'react';
import { GameBoard } from './GameBoard';
// import { CardsPanel } from './CardsPanel';
// import { UserCards } from './UserCards/index';
import { CommonGameAreaWrapper } from './CommonGameArea.styles';
import { CardArea } from './CardArea';
import { UserCards } from './UserCards';
import { CardsPanel } from './CardsPanel';

export function CommonGameArea() {
  return (
    <CommonGameAreaWrapper>
      <GameBoard />
      <CardArea />
      <UserCards />
      <CardsPanel />
    </CommonGameAreaWrapper>
  );
}
