import React from 'react';
import PropTypes from 'prop-types';
import { CardStyled, TypographyStyled } from './CardComponentsStyled';

CartDescription.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};
function CartDescription({ header, children }) {
  return (
    <CardStyled>
      <TypographyStyled>{header}</TypographyStyled>
      {children}
    </CardStyled>
  );
}
export default CartDescription;
