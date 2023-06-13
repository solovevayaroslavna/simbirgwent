import React from 'react';
import { GameBoardPart } from './GameBoardPart';
import { GameAreaWrapper } from './GameAreaWrapper';
import { GameBoardSepatator } from './GameBoardSeparator/GameBoardSeparator';

const elementsEnemy = [
  { id: 'enemyFirst', value: 0 },
  { id: 'enemySecond', value: 0 },
  { id: 'enemyThird', value: 0 },
];
const elementsFriendly = [
  { id: 'friendlyFirst', value: 0 },
  { id: 'friendlySecond', value: 0 },
  { id: 'friendlyThird', value: 0 },
];

export function GameBoard() {
  return (
    <GameAreaWrapper>
      <GameBoardPart elements={elementsEnemy} />
      <GameBoardSepatator />
      <GameBoardPart elements={elementsFriendly} />
    </GameAreaWrapper>
  );
}
