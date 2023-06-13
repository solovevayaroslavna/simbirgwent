import React from 'react';
import { UserCardsWrapperStyled } from './UserCardsWrapperStyled';
import { Card } from '../../../../Shared/Card';
import createCards from '../../../../../utils/Images.utils';

export function UserCards() {
  const cards = createCards();

  return (
    <UserCardsWrapperStyled>
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          text={card.text}
          header={card.header}
          power={card.power}
        />
      ))}
    </UserCardsWrapperStyled>
  );
}
