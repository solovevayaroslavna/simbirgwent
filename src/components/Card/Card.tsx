import { Box } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { CostIndicator } from './CostIndicator';
import CartDescription from './CardDescription';
import {
  CardBody, TypeIndicatorStyled, ImgContainer, IndicatorStyled,
} from './CardComponentsStyled';
import img from '../../images/cards/bow.svg';
import img2 from '../../images/cards/support.svg';

Card.propTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  power: PropTypes.number.isRequired,
};

export function Card(props) {
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
        <CostIndicator>{power}</CostIndicator>
        <TypeIndicatorStyled>
          <ImgContainer backgroundImage={img} />
        </TypeIndicatorStyled>
        <IndicatorStyled Mytop="45%">
          <ImgContainer backgroundImage={img2} />
        </IndicatorStyled>
      </CardBody>
      <CartDescription header={header}>{text}</CartDescription>
    </Box>
  );
}
