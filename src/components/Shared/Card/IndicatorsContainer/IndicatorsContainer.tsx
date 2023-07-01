import React from 'react';
import { LeftIndicatorsContainerStyled } from './IndicatorsContainerStyled';
import { IndicatorsContainerProps } from './IndicatorsContainer.types';

export function IndicatorsContainer({ children }:IndicatorsContainerProps) {
  return (
    <LeftIndicatorsContainerStyled>
      {children}
    </LeftIndicatorsContainerStyled>
  );
}
