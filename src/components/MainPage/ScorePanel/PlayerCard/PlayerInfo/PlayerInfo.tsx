import React from 'react';
import { PlayerInfoStyled } from './PlayerInfoStyled';
import { GamerInfo } from './PlayerInfo.types';

export function PlayerInfo(
  { gamerName, deсkName }: GamerInfo,
) {
  return (
    <PlayerInfoStyled>
      {gamerName}
      {deсkName}
    </PlayerInfoStyled>
  );
}
