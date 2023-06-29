import { PlayerType } from '../Player.types';

export interface Element {
  id: number;
  value: number;
}

export interface GameBoardPartProps {
  elements: Element[];
  type: PlayerType;
}
