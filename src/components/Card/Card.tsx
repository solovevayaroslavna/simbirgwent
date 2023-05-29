import React from 'react';
import '../../theme/colors.css';

import { CostIndicator } from './CostIndicator';
import CardDescription from './CardDescription';
import { IndicatorsContainer } from './IndicatorsContainer';
import {
  CardBody, TypeIndicatorStyled, ImgContainer, CardWrapper, AbilityStyled, TypeOfArmyStyled,
} from './CardComponentsStyled';
import img from '../../images/cards/bow.svg';
import img2 from '../../images/cards/support.svg';

interface CardProps {
  header: string,
  image: string,
  text: string,
  power: number
}

export function Card(props : CardProps) {
  const {
    image, header, text, power,
  } = props;
  return (
    <CardWrapper>
      <CardBody backgroundImage={image}>
        <IndicatorsContainer>
          <CostIndicator>{power}</CostIndicator>
          <TypeIndicatorStyled>
            <ImgContainer backgroundImage={img} />
          </TypeIndicatorStyled>
          <AbilityStyled>
            <ImgContainer backgroundImage={img2} />
          </AbilityStyled>
          <TypeOfArmyStyled />
        </IndicatorsContainer>
      </CardBody>
      <CardDescription header={header}>{text}</CardDescription>
    </CardWrapper>
  );
}
