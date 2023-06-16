import React, { useEffect, useRef } from 'react';

import { CardStyled, HeaderStyled } from './CardComponentsStyled';

interface CartDescriptionProps {
  header: string,
  children : React.ReactNode,
}
function CardDescription({ header, children }: CartDescriptionProps) {
  const divRef = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);

  function calculateFontSize(ref : React.MutableRefObject<HTMLDivElement>) {
    if (divRef.current && ref.current) {
      const parentDiv = divRef.current;
      const textDiv = ref.current;
      let minFontSize = 2;
      let maxFontSize = 30;
      let fontSize = Math.floor((minFontSize + maxFontSize) / 2);
      const height = parentDiv.offsetHeight / 2;
      while (maxFontSize - minFontSize > 1) {
        textDiv.style.fontSize = `${fontSize}px`;
        if (height > textDiv.offsetHeight) {
          minFontSize = fontSize;
        } else {
          maxFontSize = fontSize;
        }
        fontSize = Math.floor((minFontSize + maxFontSize) / 2);
      }
      textDiv.style.fontSize = `${fontSize}px`;
    }
  }

  useEffect(() => {
    const div = divRef.current;
    const observer = new ResizeObserver(() => {
      calculateFontSize(headerRef);
      calculateFontSize(descriptionRef);
    });
    observer.observe(div);
    return () => {
      observer.unobserve(div);
    };
  }, []);

  return (
    <CardStyled ref={divRef}>
      <HeaderStyled ref={headerRef}>{header}</HeaderStyled>
      <div ref={descriptionRef}>{children}</div>
    </CardStyled>
  );
}
export default CardDescription;
