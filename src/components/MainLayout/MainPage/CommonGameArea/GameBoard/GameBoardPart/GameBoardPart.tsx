import React from 'react';
import { Circle } from './Circle';
import { CardsRow } from './CardsRow';
import { GameBoardPartProps } from './GameBoardPart.types';
import { WeatherPart } from './WeatherPart';

export function GameBoardPart({ elements }: GameBoardPartProps) {
  return (
    <>
      {elements.map((element) => (
        <React.Fragment key={element.id}>
          <Circle>{element.value}</Circle>
          <WeatherPart />
          <CardsRow />
        </React.Fragment>
      ))}
    </>
  );
}
