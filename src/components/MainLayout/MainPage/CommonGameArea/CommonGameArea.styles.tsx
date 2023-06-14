import styled from 'styled-components';
import { colors } from '../../../../theme/variables';

export const CommonGameAreaWrapper = styled.div`
  display: grid;
  grid-template-rows: 178fr 38fr;
  grid-template-columns: 137fr 56fr;
  height: 100%;
  width: 79%;
  // border: 0.001em solid ${colors.secondaryColor};
  // border-left: 0.001em solid ${colors.secondaryColor};
  background-color: ${colors.commonGameAreaBackgroundColor};
  float: right;
`;
