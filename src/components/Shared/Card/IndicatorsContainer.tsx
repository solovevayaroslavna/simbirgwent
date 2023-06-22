import React from 'react';
import { LeftIndicatorsContainerStyled } from './CardComponentsStyled';

interface IndicatorsContainerProps {
  children : React.ReactNode,
}
export function IndicatorsContainer({ children }:IndicatorsContainerProps) {
  return (
    <LeftIndicatorsContainerStyled>
      {children}
    </LeftIndicatorsContainerStyled>
  );
}
