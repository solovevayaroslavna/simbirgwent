import React from 'react';
import { UserCardsWrapperStyled } from './UserCardsWrapperStyled';
import { CardMinimized } from '../../../../Shared/Card/CardMinimized';
import createCards from '../../../../../utils/Images.utils';

export function UserCards() {
  const cards = createCards();

  return (
    <UserCardsWrapperStyled>
      {cards.map((card) => (
        <CardMinimized
          key={card.id}
          card={card}
        />
      ))}
    </UserCardsWrapperStyled>
  );
}
