import React from 'react';
import { PlayerDeckInfoStyled } from './PlayerDeckInfoStyled';
import { RestOfDeck } from './RestOfDeck';
import { PlayerLifes } from './PlayerLifes';

export function PlayerDeckInfo() {
  return (
    <PlayerDeckInfoStyled>
      <RestOfDeck />
      <PlayerLifes />
    </PlayerDeckInfoStyled>
  );
}
