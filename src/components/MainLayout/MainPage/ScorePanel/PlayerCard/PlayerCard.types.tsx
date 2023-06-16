export type Gamer = {
  gamerName: string,
  deck: DeckObject,
};

export type DeckObject = {
  nameOfDeck: Fraction,
  restOfDeck: number,
  playersLifes: number,
};

enum Fraction {
  northKingdoms = 'NORTH_KINGDOMS',
  monsters = 'MONSTERS',
}

export enum Type {
  player,
  opponent,
}

export type PlayerCardProps = {
  gamer: Gamer,
  type: Type,
};