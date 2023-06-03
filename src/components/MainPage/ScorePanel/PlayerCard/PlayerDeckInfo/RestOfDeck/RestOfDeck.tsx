import React from 'react';
import { RestOfDeckStyled } from './RestOfDeckStyled';
import { PlayerRestOfDeckProps } from './RestOfDeck.types';

export function RestOfDeck({ restOfDeck }: PlayerRestOfDeckProps) {
  return (
    <RestOfDeckStyled>
      { restOfDeck }
    </RestOfDeckStyled>
  );
}
