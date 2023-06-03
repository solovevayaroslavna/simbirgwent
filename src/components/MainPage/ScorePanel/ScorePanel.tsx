import React from 'react';
import { ScorePanelStyled } from './ScorePanelStyled';
import { PlayerCard } from './PlayerCard';
import { LeaderCard } from './LeaderCard';
import { CenterPanel } from './CenterPanel';

export function ScorePanel() {
  const player1 = {
    gamerName: 'Witch',
    deck: {
      nameOfDeck: 'MONSTERS',
      restOfDeck: 9,
      playersLifes: 2,
    },
  };
  const player2 = {
    gamerName: 'Geralt',
    deck: {
      nameOfDeck: 'NORTH_KINGDOM',
      restOfDeck: 10,
      playersLifes: 1,
    },
  };
  return (
    <ScorePanelStyled>
      <LeaderCard />
      <PlayerCard gamer={player1} />
      <CenterPanel />
      <PlayerCard gamer={player2} />
      <LeaderCard />
    </ScorePanelStyled>
  );
}
