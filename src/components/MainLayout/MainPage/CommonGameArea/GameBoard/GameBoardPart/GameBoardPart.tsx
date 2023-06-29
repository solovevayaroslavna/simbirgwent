import React from 'react';
import { GameBoardPartProps } from './GameBoardPart.types';
import { PanelRow } from './PanelRow';
import { Warriors } from '../Warriors';

export function GameBoardPart({ elements, type }: GameBoardPartProps) {
  return (
    <>
      {elements.map((element) => (
        <PanelRow
          key={element.warriorsType}
          power={element.value}
          playerType={type}
          warriorsType={Warriors[element.warriorsType]}
        />
      ))}
    </>
  );
}
