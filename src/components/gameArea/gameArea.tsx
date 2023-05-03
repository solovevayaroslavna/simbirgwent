import React from 'react';
import {
  GameAreaWrapper, GameAreaBlock, Circle,
} from './gameAreaStyles';

const elementsEnemy = [
  { id: 'enemyFirst', value: 1 },
  { id: 'enemySecond', value: 2 },
  { id: 'enemyThird', value: 3 },
];
const elementsFriendly = [
  { id: 'friendlyFirst', value: 4 },
  { id: 'friendlySecond', value: 5 },
  { id: 'friendlyThird', value: 6 },
];

function GameAreaEnemy() {
  return (
    <>
      {elementsEnemy.map((element) => (
        <React.Fragment key={element.id}>
          <Circle>{element.value}</Circle>
          <GameAreaBlock />
        </React.Fragment>
      ))}
    </>
  );
}

function GameAreaFriendly() {
  return (
    <>
      {elementsFriendly.map((element) => (
        <React.Fragment key={element.id}>
          <Circle>{element.value}</Circle>
          <GameAreaBlock />
        </React.Fragment>
      ))}
    </>
  );
}

export function GameArea() {
  return (
    <GameAreaWrapper>
      <GameAreaEnemy />
      <GameAreaFriendly />
    </GameAreaWrapper>
  );
}
