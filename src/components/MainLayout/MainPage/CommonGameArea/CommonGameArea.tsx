import React from 'react';
import { CommonGameAreaWrapper } from './CommonGameArea.styles';
import { CardArea } from './CardArea';
import { UserCards } from './UserCards';
import { RestOfDeck } from './RestOfDeck';
import { GameBoard } from './GameBoard';

export function CommonGameArea() {
  return (
    <CommonGameAreaWrapper>
      <GameBoard />
      <CardArea />
      <UserCards />
      <RestOfDeck />
    </CommonGameAreaWrapper>
  );
}
