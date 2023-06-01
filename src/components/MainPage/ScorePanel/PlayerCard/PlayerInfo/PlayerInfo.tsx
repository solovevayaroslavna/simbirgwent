import React from 'react';
import { PlayerInfoStyled } from './PlayerInfoStyled';
import { PlayerCardProps } from '../PlayerCard.types';

export function PlayerInfo(
  { gamer }: PlayerCardProps,
  { children }: { children: React.ReactNode },
) {
  return (
    <PlayerInfoStyled>
      {gamer.gamerName}
      {children}
    </PlayerInfoStyled>
  );
}
