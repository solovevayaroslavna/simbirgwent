import React from 'react';
import { GameBoardPartProps } from './GameBoardPart.types';
import { PanelRow } from './PanelRow';
import { Warriors } from './PanelRow/PanelRow.types';

export function GameBoardPart({ elements, type }: GameBoardPartProps) {
  return (
    <>
      {elements.map((element) => (
        <PanelRow
          key={element.id}
          pwr={element.value}
          playerType={type}
          warriorsType={Warriors[Warriors[element.id]]}
        />
      ))}
    </>
  );
}
