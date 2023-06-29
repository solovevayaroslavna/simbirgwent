import { PlayerType, RowType } from '../Player.types';

export interface GameBoardPartProps {
  elements: RowType[];
  type: PlayerType;
}
