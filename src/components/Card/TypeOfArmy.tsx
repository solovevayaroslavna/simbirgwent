import React from 'react';

import { TypeOfArmyStyled } from './CardComponentsStyled';

interface CartDescriptionProps {
  color : string,
}
function TypeOfArmy({ color }: CartDescriptionProps) {
  return (
    <TypeOfArmyStyled>
      <svg width="20vh" height="80vh" viewBox="20 0 82 522" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M79.6204 1H17.2425V451.654C17.2425 488.5 16.5018 480 1 516.5C4.89966 521.702 37.611 522.499 56.3674 516.5C75.1239 510.501 84.7805 480.563 79.6204 451.654V1Z" stroke="black" />
      </svg>
    </TypeOfArmyStyled>
  );
}
export default TypeOfArmy;
