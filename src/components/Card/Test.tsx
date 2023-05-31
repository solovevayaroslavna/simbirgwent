import React from 'react';
import {
  Box,
} from '@material-ui/core';
import { Card } from './Card';
import createCards from '../../utils/Images.utils';
// import { ParentComponents } from './ParentComponent';

export function Test() {
  const cards = createCards();
  return (
    <>
      <Box
        component="div"
        sx={{
          height: '100vh', width: '53vh', marginBottom: '5%', // не добавил в отдельный компонент т.к это тестовый род контейнер
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            text={card.text}
            header={card.header}
            power={card.power}
          />
        ))}

      </Box>
      <Box
        component="div"
        sx={{
          height: '50vh', width: '26.5vh', marginBottom: '5%',
        }}
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            text={card.text}
            header={card.header}
            power={card.power}
          />
        ))}

      </Box>
    </>
  );
}
