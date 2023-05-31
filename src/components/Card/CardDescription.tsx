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
    const div = divRef.current;
    const observer = new ResizeObserver((entries) => {
      const parentWidth = entries[0].contentRect.width;
      const parentHeight = entries[0].contentRect.height;
      const maxDimension = Math.max(parentWidth, parentHeight);
      setFontSize(maxDimension / 15);
    });
    observer.observe(div);
    return () => {
      observer.unobserve(div);
    };
  }, []);
  return (
    <CardStyled ref={divRef} fs={fontSize}>
      <HeaderStyled fs={fontSize}>{header}</HeaderStyled>
      {children}
    </CardStyled>
  );
}
export default CardDescription;
