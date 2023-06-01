import React from 'react';
import { PlayerLifesStyled } from './PlayerLifesStyled';
import { Life } from './Life';

export function PlayerLifes() {
  return (
    <PlayerLifesStyled>
      <Life />
      <Life />
    </PlayerLifesStyled>
  );
}
