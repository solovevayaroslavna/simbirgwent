import React from 'react';
import { UserCardsWrapperStyled } from './UserCardsWrapperStyled';
// import { Card } from '../../../../Shared/Card'; если нужно, то можно поставить карту с описанием
import { CardMinimized } from '../../../../Shared/Card/CardMinimized';
import createCards from '../../../../../utils/Images.utils';

export function UserCards() {
  const cards = createCards();

  return (
    <UserCardsWrapperStyled>
      {cards.map((card) => (
        <CardMinimized
          key={card.id}
          image={card.image}
          power={card.power}
          category={card.category}
          ability={card.ability}
        />
      ))}
    </UserCardsWrapperStyled>
  );
}
