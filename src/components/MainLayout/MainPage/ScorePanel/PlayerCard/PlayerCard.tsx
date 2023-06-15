import React from 'react';
import { PlayerCardStyled } from './PlayerCardStyled';
import { PlayerCardProps, Type } from './PlayerCard.types';
import { PlayerImage } from './PlayerImage';
import { InfoWrapper } from './InfoWrapper';
import { PlayerInfo } from './PlayerInfo';
import { PlayerDeckInfo } from './PlayerDeckInfo';

export function PlayerCard({ gamer, type }: PlayerCardProps) {
  return (
    <PlayerCardStyled>
      <PlayerImage fraction={gamer.deck.nameOfDeck} type={type} />
      <InfoWrapper>
        {type === Type.opponent
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
