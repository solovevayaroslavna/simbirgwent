import React from 'react';
import { RestOfDeckStyled } from './RestOfDeckStyled';
import { PlayerRestOfDeckProps } from './RestOfDeck.types';
import { RestOfDeckImage } from './RestOfDeckImage';

export function RestOfDeck({ restOfDeck }: PlayerRestOfDeckProps) {
  return (
    <RestOfDeckStyled>
      <RestOfDeckImage />
      { restOfDeck }
    </RestOfDeckStyled>
  );
}
