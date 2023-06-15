export enum Fraction {
  northKingdoms = 'NORTH_KINGDOMS',
  monsters = 'MONSTERS',
}

export enum Type {
  player,
  opponent,
}

export type PlayerImageProps = {
  fraction: Fraction;
  type: Type;
};
