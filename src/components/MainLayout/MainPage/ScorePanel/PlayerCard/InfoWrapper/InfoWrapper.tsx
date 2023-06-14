import React from 'react';
import { InfoWrapperStyled } from './InfoWrapperStyled';

export function InfoWrapper({ children }: { children: React.ReactNode }) {
  return (
    <InfoWrapperStyled>
      { children }
    </InfoWrapperStyled>
  );
}
