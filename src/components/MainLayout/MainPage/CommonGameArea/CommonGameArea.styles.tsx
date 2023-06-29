import styled from 'styled-components';
import { colors } from '../../../../theme/variables';

export const CommonGameAreaWrapper = styled.div`
  display: grid;
  grid-area: right;
  height: 100%;
  background-color: ${colors.commonGameAreaBackgroundColor};
  grid-template-rows: 178fr 38fr;
  grid-template-columns: 137fr 56fr;
`;
