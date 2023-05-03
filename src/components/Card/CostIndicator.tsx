import React from 'react';
import PropTypes from 'prop-types';
import { IndicatorStyled } from './CardComponentsStyled';

CostIndicator.propTypes = {
  children: PropTypes.node.isRequired,
};
export function CostIndicator({ children }) {
  return (
    <IndicatorStyled>
      <div>
        {children}
      </div>
    </IndicatorStyled>
  );
}
