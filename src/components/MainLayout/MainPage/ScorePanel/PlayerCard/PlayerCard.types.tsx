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

export type PlayerCardProps = {
  gamer: Gamer,
};
