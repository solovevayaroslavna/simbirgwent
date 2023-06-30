import React from 'react';
import { PlayerLifesStyled } from './PlayerLifesStyled';
import { Life } from './Life';
import { PlayerLifesTypes } from './PlayerLifes.types';

export function PlayerLifes({ playerLifes }: PlayerLifesTypes) {
  let playerLifeOne: boolean = false;
  let playerLifeTwo: boolean = false;

  if (playerLifes === 2) {
    playerLifeOne = true;
    playerLifeTwo = true;
  } else if (playerLifes === 1) {
    playerLifeOne = true;
  }

  return (
    <PlayerLifesStyled>
      <Life bright={playerLifeOne} />
      <Life bright={playerLifeTwo} />
    </PlayerLifesStyled>
  );
}
