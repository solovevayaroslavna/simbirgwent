import React from 'react';
import { CardList, Card } from './cardsListStyles';

export function CardsList() {
  const cards = Array.from({ length: 10 }).map((_, i) => {
    const id = `card_${i}`;
    return <Card key={id} id={id} />;
  });

  return <CardList>{cards}</CardList>;
}
