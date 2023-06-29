import { PlayerType } from '../../Player.types';

export enum Warriors {
  swordsmen,
  archers,
  artillery,
}

export interface PanelRowProps {
  warriorsType: Warriors;
  playerType: PlayerType;
  power: number;
}
