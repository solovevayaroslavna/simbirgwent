import { Typography } from '@material-ui/core';
import React from 'react';
import CardStyled from './CardStyled';

export function TestComponent() {
  return (
    <CardStyled>
      <Typography variant="h6" component="div">Card</Typography>
    </CardStyled>
  );
}
