import React, { useEffect, useState, useRef } from 'react';
import { IndicatorStyled } from './CardComponentsStyled';

interface CostIndicatorProps {
  children : React.ReactNode,
  minimized? : boolean,
}

function CostIndicator({ children, minimized }:CostIndicatorProps) {
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
    <IndicatorStyled minimized={minimized} ref={divRef} fs={fontSize}>
      {children}
    </IndicatorStyled>
  );
}

CostIndicator.defaultProps = {
  minimized: false,
};

export { CostIndicator };
