import { PlayerType } from '../../Player.types';
import { Warriors } from '../../Warriors';

export interface PanelRowProps {
  warriorsType: Warriors;
  playerType: PlayerType;
  power: number;
}
