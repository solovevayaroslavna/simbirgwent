import React from 'react';
import '../../../theme/colors.css';
import { IndicatorsContainer } from './IndicatorsContainer';
import {
  CardBodyMinimized, TypeIndicatorStyled, DownIndicatorsContainerStyled,
  ImgContainer, CardWrapper, AbilityStyled, PowerIndicatorStyled,
} from './CardComponentsStyled';
import img from '../../../images/cards/bow.svg';
import img2 from '../../../images/cards/support.svg';

interface CardProps {
  image: string,
  power: string,
  ability: number,
  category: number
}

export function CardMinimized(props : CardProps) {
  const {
    image, power, ability, category,
  } = props;
  return (
    <CardWrapper>
      <CardBodyMinimized backgroundImage={image}>
        <IndicatorsContainer>
          <PowerIndicatorStyled minimized>
            <ImgContainer backgroundImage={power} />
          </PowerIndicatorStyled>
        </IndicatorsContainer>
        <DownIndicatorsContainerStyled>
          {ability
            ? (
              <TypeIndicatorStyled minimized>
                <ImgContainer backgroundImage={img} />
              </TypeIndicatorStyled>
            ) : ''}
          {category
            ? (
              <AbilityStyled minimized>
                <ImgContainer backgroundImage={img2} />
              </AbilityStyled>
            ) : ''}
        </DownIndicatorsContainerStyled>
      </CardBodyMinimized>
    </CardWrapper>
  );
}
