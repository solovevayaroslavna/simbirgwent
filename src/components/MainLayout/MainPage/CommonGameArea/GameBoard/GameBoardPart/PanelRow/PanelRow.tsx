import React from 'react';
import { CardsRow } from './CardsRow';
import { Circle } from './Circle';
import { SpecialCardsPart } from './SpecialCardsPart';
import { PanelRowProps } from './PanelRow.types';

export function PanelRow({ warriorsType, playerType, power }: PanelRowProps) {
  return (
    <>
      <Circle playerType={playerType}>{power}</Circle>
      <SpecialCardsPart />
      <CardsRow>
        { warriorsType }
      </CardsRow>
    </>
  );
}
