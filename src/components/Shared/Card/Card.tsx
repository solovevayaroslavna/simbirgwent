import React from 'react';
import '../../../theme/colors.css';
import CardDescription from './CardDescription';
import { IndicatorsContainer } from './IndicatorsContainer';
import {
  CardBody, TypeIndicatorStyled, ImgContainer, CardWrapper,
  AbilityStyled, TypeOfArmyStyled, PowerIndicatorStyled,
} from './CardComponentsStyled';
import img from '../../../images/cards/bow.svg';
import img2 from '../../../images/cards/support.svg';

interface CardProps {
  header: string,
  image: string,
  text: string,
  power: string,
  ability: number,
  category: number
}

export function Card(props : CardProps) {
  const {
    image, header, text, power, category, ability,
  } = props;
  return (
    <CardWrapper>
      <CardBody backgroundImage={image}>
        <IndicatorsContainer>
          <PowerIndicatorStyled>
            <ImgContainer backgroundImage={power} />
          </PowerIndicatorStyled>
          {category
            ? (
              <>
                <TypeIndicatorStyled>
                  <ImgContainer backgroundImage={img} />
                </TypeIndicatorStyled>
                <TypeOfArmyStyled />
              </>
            ) : ''}
          {ability
            ? (
              <AbilityStyled>
                <ImgContainer backgroundImage={img2} />
              </AbilityStyled>
            ) : ''}
        </IndicatorsContainer>
      </CardBody>
      <CardDescription header={header}>{text}</CardDescription>
    </CardWrapper>
  );
}
