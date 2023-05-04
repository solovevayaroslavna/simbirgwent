import React from 'react';
import { CommonGameAreaWrapper } from './CommonGameArea.styles';
import { CardArea } from './CardArea';
import { UserCards } from './UserCards';
import { CardsPanel } from './CardsPanel';
import { GameBoard } from './GameBoard';

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
