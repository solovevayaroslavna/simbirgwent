import { Type } from '../../Player.types';

export enum Warriors {
  swordsmen,
  archers,
  artillery,
}

export interface PanelRowProps {
  warriorsType: Warriors;
  playerType: Type;
  pwr: number;
}
