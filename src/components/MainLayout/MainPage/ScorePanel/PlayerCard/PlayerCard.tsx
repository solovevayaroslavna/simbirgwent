import React from 'react';
import { PlayerCardStyled } from './PlayerCardStyled';
import { PlayerCardProps } from './PlayerCard.types';
import { PlayerImage } from './PlayerImage';
import { InfoWrapper } from './InfoWrapper';
import { PlayerInfo } from './PlayerInfo';
import { PlayerDeckInfo } from './PlayerDeckInfo';
import { PlayerType } from '../Player.types';

export function PlayerCard({ gamer, playerType }: PlayerCardProps) {
  return (
    <PlayerCardStyled playerType={playerType}>
      <PlayerImage fraction={gamer.deck.nameOfDeck} type={playerType} />
      <InfoWrapper>
        {playerType === PlayerType.enemy
          ? (
            <>
              <PlayerDeckInfo gamerDeckInfo={{
                restOfDeck: gamer.deck.restOfDeck,
                gamerLifes: gamer.deck.playersLifes,
              }}
              />
              <PlayerInfo gamerInfo={{
                gamerName: gamer.gamerName,
                deсkName: gamer.deck.nameOfDeck,
              }}
              />
            </>
          )
          : (
            <>
              <PlayerInfo gamerInfo={{
                gamerName: gamer.gamerName,
                deсkName: gamer.deck.nameOfDeck,
              }}
              />
              <PlayerDeckInfo gamerDeckInfo={{
                restOfDeck: gamer.deck.restOfDeck,
                gamerLifes: gamer.deck.playersLifes,
              }}
              />
            </>
          )}
      </InfoWrapper>
    </PlayerCardStyled>
  );
}
