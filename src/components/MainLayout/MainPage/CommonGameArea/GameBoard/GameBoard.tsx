import React from 'react';
import { GameBoardPart } from './GameBoardPart';
import { GameAreaWrapper } from './GameAreaWrapper';
import { GameBoardSepatator } from './GameBoardSeparator/GameBoardSeparator';
import { PlayerType } from './Player.types';

// id - type of Warriors
//  2 - artillery
//  1 - archers
//  0 - swordsmen
const elementsOpponent = [
  { id: 2, value: 2 },
  { id: 1, value: 3 },
  { id: 0, value: 8 },
];
const elementsPlayer = [
  { id: 0, value: 10 },
  { id: 1, value: 4 },
  { id: 2, value: 12 },
];

export function GameBoard() {
  return (
    <GameAreaWrapper>
      <GameBoardPart type={PlayerType.opponent} elements={elementsOpponent} />
      <GameBoardSepatator />
      <GameBoardPart type={PlayerType.player} elements={elementsPlayer} />
    </GameAreaWrapper>
  );
}
