import { Box } from '@material-ui/core';
import React from 'react';
import '../../theme/colors.css';
import TypeOfArmy from './TypeOfArmy';
import { CostIndicator } from './CostIndicator';
import CartDescription from './CardDescription';
import {
  CardBody, TypeIndicatorStyled, ImgContainer, IndicatorStyled,
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
    <Box
      component="div"
      sx={{
        position: 'relative', height: '100vh', width: '53vh', border: '2px bold grey', marginBottom: '5%',
      }}
    >

      <CardBody backgroundImage={image}>
        <TypeOfArmy color="var(--color-type-something)" />
        <CostIndicator>{power}</CostIndicator>
        <TypeIndicatorStyled>
          <ImgContainer backgroundImage={img} />
        </TypeIndicatorStyled>
        <IndicatorStyled myTop="45%">
          <ImgContainer backgroundImage={img2} />
        </IndicatorStyled>
      </CardBody>
      <CartDescription header={header}>{text}</CartDescription>
    </Box>
  );
}
