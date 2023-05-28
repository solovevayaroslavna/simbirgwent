import React from 'react';
import { ScorePanelStyled } from './ScorePanelStyled';
import { PlayerCard } from './PlayerCard';
import { LeaderCard } from './LeaderCard';
import { CenterPanel } from './CenterPanel';

export function ScorePanel() {
  const player1 = {
    gamerName: 'Стивен',
    desk: {
      nameOfDeck: 'Чудовища',
      restOfDeck: 'фыв',
      playersLifes: 5,
    },
  };
  return (
    <ScorePanelStyled>
      <LeaderCard />
      <PlayerCard gamer={player1} />
      <CenterPanel />
      <PlayerCard gamer={player1} />
      <LeaderCard />
    </ScorePanelStyled>
  );
}
