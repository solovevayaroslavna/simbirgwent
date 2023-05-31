import React, { useEffect, useState, useRef } from 'react';
import { IndicatorStyled } from './CardComponentsStyled';

interface CostIndicatorProps {
  children : React.ReactNode,
}

export function CostIndicator({ children }:CostIndicatorProps) {
  const [fontSize, setFontSize] = useState(16);
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    const observer = new ResizeObserver((entries) => {
      const parentWidth = entries[0].contentRect.width;
      const parentHeight = entries[0].contentRect.height;
      const maxDimension = Math.max(parentWidth, parentHeight);
      setFontSize(maxDimension / 2);
    });
    observer.observe(div);
    return () => {
      observer.unobserve(div);
    };
  }, []);

  return (
    <IndicatorStyled ref={divRef} fs={fontSize}>
      {children}
    </IndicatorStyled>
  );
}
