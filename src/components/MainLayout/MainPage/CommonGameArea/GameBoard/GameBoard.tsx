import React from 'react';
import { GameBoardPart } from './GameBoardPart';
import { GameAreaWrapper } from './GameAreaWrapper';
import { GameBoardSepatator } from './GameBoardSeparator/GameBoardSeparator';
import { PlayerType, RowType } from './Player.types';
import { Warriors } from './Warriors';

// id - type of Warriors
//  2 - artillery
//  1 - archers
//  0 - swordsmen
const elementsOpponent: RowType[] = [
  { warriorsType: Warriors.artillery, value: 2 },
  { warriorsType: Warriors.archers, value: 3 },
  { warriorsType: Warriors.swordsmen, value: 8 },
];

const elementsPlayer: RowType[] = [
  { warriorsType: Warriors.artillery, value: 12 },
  { warriorsType: Warriors.archers, value: 4 },
  { warriorsType: Warriors.swordsmen, value: 10 },
];
// const elementsPlayer = [
//   { id: 0, value: 10 },
//   { id: 1, value: 4 },
//   { id: 2, value: 12 },
// ];

export function GameBoard() {
  return (
    <GameAreaWrapper>
      <GameBoardPart type={PlayerType.opponent} elements={elementsOpponent} />
      <GameBoardSepatator />
      <GameBoardPart type={PlayerType.player} elements={elementsPlayer} />
    </GameAreaWrapper>
  );
}
