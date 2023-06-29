import { Warriors } from './Warriors';

export interface RowType {
  warriorsType: Warriors;
  value: number;
}

export enum PlayerType {
  player,
  opponent,
}
