import React from 'react';
import { Card } from './Card';
import createCards from '../../utils/Images.utils';

export function Test() {
  const cards = createCards();
  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          text={card.text}
          header={card.header}
          power={card.power}
        />
      ))}
    </>
  );
}
