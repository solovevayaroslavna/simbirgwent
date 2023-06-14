export type GamerDeckInfo = {
  restOfDeck: number,
  gamerLifes: number,
  children?: React.ReactNode,
};

export type PlayerDeckInfoProps = {
  gamerDeckInfo: GamerDeckInfo,
};
