import React from 'react';
import { PlayerImageStyled } from './PlayerImageStyled';
import { ShieldImage } from './ShieldImage';
import { PlayerImageProps } from './PlayerImage.types';

export function PlayerImage({ fraction }: PlayerImageProps) {
  return (
    <PlayerImageStyled>
      <ShieldImage fraction={fraction} />
    </PlayerImageStyled>
  );
}
