import React from 'react';
import { GameBoardPart } from './GameBoardPart';
import { GameAreaWrapper } from './GameAreaWrapper';
import { GameBoardSepatator } from './GameBoardSeparator/GameBoardSeparator';
import { PlayerType, RowType } from './Player.types';
import { Warriors } from './Warriors';

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

export function GameBoard() {
  return (
    <GameAreaWrapper>
      <GameBoardPart type={PlayerType.opponent} elements={elementsOpponent} />
      <GameBoardSepatator />
      <GameBoardPart type={PlayerType.player} elements={elementsPlayer} />
    </GameAreaWrapper>
  );
}
