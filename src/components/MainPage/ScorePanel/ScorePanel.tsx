import React from 'react';
import { ScorePanelStyled } from './ScorePanelStyled';
import { PlayerCard } from './PlayerCard';
import { LeaderCard } from './LeaderCard';
import { CenterPanel } from './CenterPanel';

export function ScorePanel() {
  return (
    <ScorePanelStyled>
      <PlayerCard />
      <LeaderCard />
      <CenterPanel />
      <LeaderCard />
      <PlayerCard />
    </ScorePanelStyled>
  );
}
