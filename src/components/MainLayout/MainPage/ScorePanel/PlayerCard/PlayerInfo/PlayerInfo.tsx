import React from 'react';
import { PlayerInfoStyled } from './PlayerInfoStyled';
import { PlayerInfoProps } from './PlayerInfo.types';
import { PStyled } from './PStyled';

export function PlayerInfo(
  { gamerInfo }: PlayerInfoProps,
) {
  return (
    <PlayerInfoStyled>
      <PStyled $bold>
        {gamerInfo.gamerName}
      </PStyled>
      <PStyled>
        {gamerInfo.deсkName}
      </PStyled>
    </PlayerInfoStyled>
  );
}
