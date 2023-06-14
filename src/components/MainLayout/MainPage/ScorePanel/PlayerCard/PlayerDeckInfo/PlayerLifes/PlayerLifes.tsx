import React from 'react';
import { PlayerLifesStyled } from './PlayerLifesStyled';
import { Life } from './Life';
import { PlayerLifesTypes } from './PlayerLifes.types';

export function PlayerLifes({ playerLifes }: PlayerLifesTypes) {
  let bright1: boolean;
  let bright2: boolean;

  if (playerLifes === 2) {
    bright1 = true;
    bright2 = true;
  } else if (playerLifes === 1) {
    bright1 = true;
    bright2 = false;
  } else if (playerLifes === 0) {
    bright1 = false;
    bright2 = false;
  }

  return (
    <PlayerLifesStyled>
      <Life $bright={bright1} />
      <Life $bright={bright2} />
    </PlayerLifesStyled>
  );
}
