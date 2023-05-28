import React from 'react';
import { PlayerImageStyled } from './PlayerImageStyled';

export function PlayerImage({ children }: { children: React.ReactNode }) {
  return (
    <PlayerImageStyled>
      {children}
    </PlayerImageStyled>
  );
}
