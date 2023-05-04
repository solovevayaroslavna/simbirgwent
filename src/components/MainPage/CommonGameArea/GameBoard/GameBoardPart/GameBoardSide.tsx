import React from 'react';
import { Circle } from './Circle';
import { CardsRow } from './CardsRow';
import { GameBoardProps } from './GameBoardSide.types';

export function GameBoardSide({ elements }: GameBoardProps) {
  return (
    <>
      {elements.map((element) => (
        <React.Fragment key={element.id}>
          <Circle>{element.value}</Circle>
          <CardsRow />
        </React.Fragment>
      ))}
    </>
  );
}
