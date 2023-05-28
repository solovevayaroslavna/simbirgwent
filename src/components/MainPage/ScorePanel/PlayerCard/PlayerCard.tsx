import React from 'react';
import { PlayerCardStyled } from './PlayerCardStyled';
import { PlayerCardProps } from './PlayerCard.types';
import { PlayerImage } from './PlayerCardPart';

export function PlayerCard({ gamer }: PlayerCardProps) {
  return (
    <PlayerCardStyled>
      <PlayerImage>
        { gamer.gamerName }
      </PlayerImage>
    </PlayerCardStyled>
  );
}
