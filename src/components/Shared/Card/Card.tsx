import React from 'react';
import '../../../theme/colors.css';
import CardDescription from './CardDescription';
import { IndicatorsContainer } from './IndicatorsContainer';
import { CostIndicator } from './CostIndicator';
import { ArmyCard, WeatherCard } from './Card.types';
import {
  CardBody, TypeIndicatorStyled, ImgContainer, CardWrapper,
  AbilityStyled, TypeOfArmyStyled, PowerIndicatorStyled,
} from './CardComponentsStyled';
import img from '../../../images/cards/bow.svg';
import img2 from '../../../images/cards/support.svg';

interface CardProps {
  card: ArmyCard | WeatherCard;
}

export function Card(props : CardProps) {
  const makeZIndexes = (layers: string[]) => layers.reduce((agg, layerName, index) => {
    const valueName = `z-index-${layerName}`;
    return { ...agg, [valueName]: index * 100 };
  }, {});

  const Z_INDEX_LAYERS = ['background', 'indicator'];
  const zIndexes = makeZIndexes(Z_INDEX_LAYERS);

  const styleString = Object.entries(zIndexes)
    .map(([name, value]) => `--${name}: ${value}; `)
    .join('');
  document.getElementById('root').setAttribute('style', styleString);
  const { card } = props;
  const {
    image, power, header, text,
  } = card;
  return (
    <CardWrapper>
      <CardBody backgroundImage={image}>
        <IndicatorsContainer>
          {typeof power === 'string'
            ? (
              <PowerIndicatorStyled>
                <ImgContainer backgroundImage={power} />
              </PowerIndicatorStyled>
            ) : <CostIndicator minimized={false}>{power}</CostIndicator>}
          {Object.prototype.hasOwnProperty.call(card, 'category')
            && (
              <>
                <TypeIndicatorStyled>
                  <ImgContainer backgroundImage={img} />
                </TypeIndicatorStyled>
                <TypeOfArmyStyled />
              </>
            )}
          {Object.prototype.hasOwnProperty.call(card, 'ability')
            && (
              <AbilityStyled>
                <ImgContainer backgroundImage={img2} />
              </AbilityStyled>
            )}
        </IndicatorsContainer>
      </CardBody>
      <CardDescription header={header}>{text}</CardDescription>
    </CardWrapper>
  );
}
