import React from 'react';
import { IndicatorStyled } from './CardComponentsStyled';

interface CostIndicatorProps {
  children : React.ReactNode,
}
export function CostIndicator({ children }:CostIndicatorProps) {
  return (
    <IndicatorStyled>
      {children}
    </IndicatorStyled>
  );
}
