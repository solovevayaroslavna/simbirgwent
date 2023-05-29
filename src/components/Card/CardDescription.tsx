import React, { useEffect, useState, useRef } from 'react';

import { CardStyled, HeaderStyled } from './CardComponentsStyled';

interface CartDescriptionProps {
  header: string,
  children : React.ReactNode,
}
function CardDescription({ header, children }: CartDescriptionProps) {
  const [fontSize, setFontSize] = useState(16);
  const divRef = useRef(null);

  useEffect(() => {
    const parentWidth = divRef.current.clientWidth;
    const parentHeight = divRef.current.clientHeight;
    const maxDimension = Math.max(parentWidth, parentHeight);
    setFontSize(maxDimension / 15);
  }, [divRef]);
  return (
    <CardStyled ref={divRef} fs={fontSize}>
      <HeaderStyled fs={fontSize}>{header}</HeaderStyled>
      {children}
    </CardStyled>
  );
}
export default CardDescription;
