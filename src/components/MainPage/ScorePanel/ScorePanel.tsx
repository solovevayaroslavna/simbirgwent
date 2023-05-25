import React from 'react';
import { ScorePanelStyled } from './ScorePanelStyled';
import { EnemyLeader } from './ScorePanelPart/EnemyLeader';
import { EnemyStatus } from './ScorePanelPart/EnemyStatus';
import { MoveChoice } from './ScorePanelPart/MoveChoice';
import { FriendlyStatusLeader } from './ScorePanelPart/FriendlyStatusLeader';

export function ScorePanel() {
  return (
    <ScorePanelStyled>
      <EnemyLeader>
        Иконка лидера врага
      </EnemyLeader>
      <EnemyStatus>
        Количество карт и кристаллов врага
      </EnemyStatus>
      <MoveChoice>
        Пас или сдаться
      </MoveChoice>
      <FriendlyStatusLeader>
        Иконка лидера игрока, количество карт и кристаллов игрока
      </FriendlyStatusLeader>
    </ScorePanelStyled>
  );
}
