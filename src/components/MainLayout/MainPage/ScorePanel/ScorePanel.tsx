import React from 'react';
import { ScorePanelStyled } from './ScorePanelStyled';
import { PlayerCard } from './PlayerCard';
import { LeaderCard } from './LeaderCard';
import { CenterPanel } from './CenterPanel';
import { Fraction, Type } from './Player.types';

export function ScorePanel() {
  const player1 = {
    gamerName: 'Witch',
    deck: {
      nameOfDeck: Fraction.monsters,
      restOfDeck: 9,
      playersLifes: 2,
    },
  };
  const player2 = {
    gamerName: 'Geralt',
    deck: {
      nameOfDeck: Fraction.northKingdoms,
      restOfDeck: 12,
      playersLifes: 1,
    },
  };
  return (
    <ScorePanelStyled>
      <LeaderCard />
      <PlayerCard gamer={player1} type={Type.opponent} />
      <CenterPanel />
      <PlayerCard gamer={player2} type={Type.player} />
      <LeaderCard />
    </ScorePanelStyled>
  );
}
