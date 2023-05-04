import React from 'react';
import {
  GameAreaBlock, Circle,
} from './gameAreaSidesStyles';

interface Element {
  id: string;
  value: number;
}

interface GameAreaProps {
  elements: Element[];
}

export function GameAreaSide({ elements }: GameAreaProps) {
  return (
    <>
      {elements.map((element) => (
        <React.Fragment key={element.id}>
          <Circle>{element.value}</Circle>
          <GameAreaBlock />
        </React.Fragment>
      ))}
    </>
  );
}
