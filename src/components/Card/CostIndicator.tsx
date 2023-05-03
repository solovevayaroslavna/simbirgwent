import React from 'react';
import PropTypes from 'prop-types';
import { CostIndicatorStyled } from './CardComponentsStyled';

CostIndicator.propTypes = {
  children: PropTypes.node.isRequired,
};
export function CostIndicator({ children }) {
  return (
    <CostIndicatorStyled>
      <div>
        {children}
      </div>
    </CostIndicatorStyled>
  );
}
