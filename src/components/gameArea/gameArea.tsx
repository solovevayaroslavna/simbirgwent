import React from 'react';
import { GameAreaWrapper, GameAreaBlock, Circle } from './gameAreaStyles';

export function GameArea() {
  return (
    <GameAreaWrapper>
      <Circle>1</Circle>
      <GameAreaBlock />
      <Circle>2</Circle>
      <GameAreaBlock />
      <Circle>3</Circle>
      <GameAreaBlock />
      <Circle>4</Circle>
      <GameAreaBlock />
      <Circle>5</Circle>
      <GameAreaBlock />
      <Circle>6</Circle>
      <GameAreaBlock />
    </GameAreaWrapper>
  );
}
