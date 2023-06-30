export interface ICard {
  id:number,
  image: string,
  header: string,
  text: string,
  amount: number
}

export interface ArmyCard extends ICard {
  power: number,
  ability: number,
  category: number,
}

export interface WeatherCard extends ICard {
  power: string,
}

export enum SquadType {
  meleeSquad = 'MELEE_SQUAD',
  longRangeSquad = 'LONG_RANGE_SQUAD',
  siegeSquad = 'SIEGE_SQUAD',
  weatherCard = 'WEATER_CARD',
}

export enum Ability {
  spy = 'SPY',
  connection = 'CONNECTION',
}

export enum Block {
  noAccessToStackOverflow = 'BLOCKED_FIRST_LINE',
  outOfCookies = 'BLOCKED_SECOND_LINE',
  blockThirdLine = 'BLOCKED_THIRD_LINE',
  blockFouthLine = 'BLOCKED_FOUTH_LINE',
  RemoveRestrictions = 'REMOVE_RESTRICTIONS',
}
