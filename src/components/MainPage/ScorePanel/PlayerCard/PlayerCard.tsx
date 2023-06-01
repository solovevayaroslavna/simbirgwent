import React from 'react';
import { PlayerCardStyled } from './PlayerCardStyled';
import { PlayerCardProps } from './PlayerCard.types';
import { PlayerImage } from './PlayerImage';
import { InfoWrapper } from './InfoWrapper';
import { PlayerInfo } from './PlayerInfo';
import { PlayerDeckInfo } from './PlayerDeckInfo';

export function PlayerCard({ gamer }: PlayerCardProps) {
  return (
    <PlayerCardStyled>
      <PlayerImage />
      <InfoWrapper>
        <PlayerInfo gamerName={gamer.gamerName} deсkName={gamer.deck.nameOfDeck}>
          sd
        </PlayerInfo>
        <PlayerDeckInfo />
      </InfoWrapper>
    </PlayerCardStyled>
  );
}
