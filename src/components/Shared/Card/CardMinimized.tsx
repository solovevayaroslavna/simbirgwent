import React from 'react';
import '../../../theme/colors.css';
import { IndicatorsContainer } from './IndicatorsContainer';
import { CostIndicator } from './CostIndicator';
import { ArmyCard, WeatherCard } from './Card.types';
import {
  CardBodyMinimized, TypeIndicatorStyled, DownIndicatorsContainerStyled,
  ImgContainer, CardWrapper, AbilityStyled, PowerIndicatorStyled,
} from './CardComponentsStyled';
import img from '../../../images/cards/bow.svg';
import img2 from '../../../images/cards/support.svg';

interface CardMinimizedProps {
  card: ArmyCard | WeatherCard;
}

export function CardMinimized(props : CardMinimizedProps) {
  const { card } = props;
  const {
    image, power,
  } = card;
  return (
    <CardWrapper>
      <CardBodyMinimized backgroundImage={image}>
        <IndicatorsContainer>
          {typeof power === 'string'
            ? (
              <PowerIndicatorStyled minimized>
                <ImgContainer backgroundImage={power} />
              </PowerIndicatorStyled>
            ) : <CostIndicator minimized>{power}</CostIndicator>}
        </IndicatorsContainer>
        <DownIndicatorsContainerStyled>
          {Object.prototype.hasOwnProperty.call(card, 'category')
            && (
              <TypeIndicatorStyled minimized>
                <ImgContainer backgroundImage={img} />
              </TypeIndicatorStyled>
            ) }
          {Object.prototype.hasOwnProperty.call(card, 'ability')
           && (
           <AbilityStyled minimized>
             <ImgContainer backgroundImage={img2} />
           </AbilityStyled>
           )}
        </DownIndicatorsContainerStyled>
      </CardBodyMinimized>
    </CardWrapper>
  );
}
