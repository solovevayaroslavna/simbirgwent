export type Gamer = {
  gamerName: string,
  deck: DeckObject,
};

export type DeckObject = {
  nameOfDeck: string,
  restOfDeck: number,
  playersLifes: number,
};

export type PlayerCardProps = {
  gamer: Gamer,
};
