import React from 'react';
import { PlayerDeckInfoStyled } from './PlayerDeckInfoStyled';
import { RestOfDeck } from './RestOfDeck';
import { PlayerLifes } from './PlayerLifes';
import { PlayerDeckInfoProps } from './PlayerDeckInfo.types';

export function PlayerDeckInfo(
  { gamerDeckInfo }: PlayerDeckInfoProps,
) {
  return (
    <PlayerDeckInfoStyled>
      <RestOfDeck restOfDeck={gamerDeckInfo.restOfDeck} />
      <PlayerLifes playerLifes={gamerDeckInfo.gamerLifes} />
    </PlayerDeckInfoStyled>
  );
}
