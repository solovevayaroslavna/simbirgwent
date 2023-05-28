export type Gamer = {
  gamerName: string,
  desk: DeskObject,
};

export type DeskObject = {
  nameOfDeck: string,
  restOfDeck: string,
  playersLifes: number,
};

export type PlayerCardProps = {
  gamer: Gamer,
};
