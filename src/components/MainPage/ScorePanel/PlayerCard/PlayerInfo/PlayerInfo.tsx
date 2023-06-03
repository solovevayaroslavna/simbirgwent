import React from 'react';
import { PlayerInfoStyled } from './PlayerInfoStyled';
import { PlayerInfoProps } from './PlayerInfo.types';

export function PlayerInfo(
  { gamerInfo }: PlayerInfoProps,
) {
  return (
    <PlayerInfoStyled>
      {gamerInfo.gamerName}
      {gamerInfo.deсkName}
    </PlayerInfoStyled>
  );
}
