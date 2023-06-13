import React from 'react';
import { Circle } from './Circle';
import { CardsRow } from './CardsRow';
import { GameBoardPartProps } from './GameBoardPart.types';

export function GameBoardPart({ elements }: GameBoardPartProps) {
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
