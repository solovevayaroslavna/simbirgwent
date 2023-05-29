import React, { useEffect, useState, useRef } from 'react';
import { IndicatorStyled } from './CardComponentsStyled';

interface CostIndicatorProps {
  children : React.ReactNode,
}

export function CostIndicator({ children }:CostIndicatorProps) {
  const [fontSize, setFontSize] = useState(16);
  const divRef = useRef(null);

  useEffect(() => {
    const parentWidth = divRef.current.clientWidth;
    const parentHeight = divRef.current.clientHeight;
    const maxDimension = Math.max(parentWidth, parentHeight);
    setFontSize(maxDimension / 2);
  }, [divRef]);

  return (
    <IndicatorStyled ref={divRef} fs={fontSize}>
      {children}
    </IndicatorStyled>
  );
}
