import { Fraction, PlayerType } from '../Player.types';

export type Gamer = {
  gamerName: string,
  deck: DeckObject,
};

export type DeckObject = {
  nameOfDeck: Fraction,
  restOfDeck: number,
  playersLifes: number,
};

export type PlayerCardProps = {
  gamer: Gamer,
  playerType: PlayerType,
};
