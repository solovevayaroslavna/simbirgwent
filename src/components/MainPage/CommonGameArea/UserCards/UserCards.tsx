import React from 'react';
import { UserCardsWrapperStyled } from './UserCardsWrapperStyled';
import { Card } from '../../../Shared/Card/CardStyled';

export function UserCards() {
  const cards = Array.from({ length: 10 });

  return (
    <UserCardsWrapperStyled>
      {
        cards.map((_, i) => {
          const id = `card_${i}`;
          return <Card key={id} id={id} />;
        })
      }
    </UserCardsWrapperStyled>
  );
}
