import React from 'react';
import { UserCardsWrapperStyled } from './UserCardsWrapperStyled';
// import { Card } from '../../../Shared/Card/CardStyled';
import { Card } from '../../../Card';
import createCards from '../../../../utils/Images.utils';

export function UserCards() {
  const cards = createCards();
  // const cards = Array.from({ length: 10 });

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
