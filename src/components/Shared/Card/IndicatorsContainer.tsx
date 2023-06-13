import React from 'react';
import { IndicatorsContainerStyled } from './CardComponentsStyled';

interface IndicatorsContainerProps {
  children : React.ReactNode,
}
export function IndicatorsContainer({ children }:IndicatorsContainerProps) {
  return (
    <IndicatorsContainerStyled>
      {children}
    </IndicatorsContainerStyled>
  );
}
