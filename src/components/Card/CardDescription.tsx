import React from 'react';

import { CardStyled, TypographyStyled } from './CardComponentsStyled';

interface CartDescriptionProps {
  header:string,
  children : React.ReactNode,
}
function CartDescription({ header, children }: CartDescriptionProps) {
  return (
    <CardStyled>
      <TypographyStyled>{header}</TypographyStyled>
      {children}
    </CardStyled>
  );
}
export default CartDescription;
