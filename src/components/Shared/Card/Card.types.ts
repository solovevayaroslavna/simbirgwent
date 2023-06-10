enum SquadType {
  meleeSquad = 'MELEE_SQUAD',
  longRangeSquad = 'LONG_RANGE_SQUAD',
  siegeSquad = 'SIEGE_SQUAD',
  weatherCard = 'WEATER_CARD',
}

enum Ability {
  spy = 'SPY',
  connection = 'CONNECTION',
}
export const opponentCardsInGameMock = [{
  id: 'guidstring1',
  ability: Ability.spy,
  power: 1,
  category: SquadType.meleeSquad,
  header: 'header text',
  description: 'cardDescription',
  image: 'someImage',
},
{
  id: 'guidstring2',
  ability: Ability.connection,
  power: 2,
  category: SquadType.longRangeSquad,
  header: 'text',
  description: 'cardDescription',
  image: 'someImage',
},
];
