import React from 'react';
import { CardsRow } from './CardsRow';
import { Circle } from './Circle';
import { WeatherPart } from './WeatherPart';
import { PanelRowProps } from './PanelRow.types';

export function PanelRow({ warriorsType, playerType, pwr }: PanelRowProps) {
  return (
    <>
      <Circle playerType={playerType}>{pwr}</Circle>
      <WeatherPart />
      <CardsRow>
        { warriorsType }
      </CardsRow>
    </>
  );
}
