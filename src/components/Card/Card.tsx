import { Box } from '@material-ui/core';
import React from 'react';
import { CostIndicator } from './CostIndicator';
import CartDescription from './CardDescription';
import { CardBody, TypeIndicatorStyled, ImgContainer } from './CardComponentsStyled';
import img from '../../images/cards/bow.svg';

interface CardInter {
  image:string,
  header:string,
  text:string,
}

export function Card(props:CardInter) {
  const { image, header, text } = props;
  return (
    <Box
      component="div"
      sx={{
        position: 'relative', height: '100vh', width: '53vh', border: '2px bold grey',
      }}
    >

      <CardBody backgroundImage={image}>
        <CostIndicator>2</CostIndicator>
        <TypeIndicatorStyled>
          <ImgContainer backgroundImage={img} />
        </TypeIndicatorStyled>
      </CardBody>
      <CartDescription header={header}>{text}</CartDescription>
    </Box>
  );
}
