import React from 'react';
import { GameBoardSide } from './GameBoardPart';
import { GameAreaWrapper } from './GameAreaWrapper';

const elementsEnemy = [
  { id: 'enemyFirst', value: 1 },
  { id: 'enemySecond', value: 2 },
  { id: 'enemyThird', value: 3 },
];
const elementsFriendly = [
  { id: 'friendlyFirst', value: 4 },
  { id: 'friendlySecond', value: 5 },
  { id: 'friendlyThird', value: 6 },
];

export function GameBoard() {
  // TODO добавить разделитель
  return (
    <GameAreaWrapper>
      <GameBoardSide elements={elementsEnemy} />
      <GameBoardSide elements={elementsFriendly} />
    </GameAreaWrapper>
  );
}
