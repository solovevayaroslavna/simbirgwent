import styled from 'styled-components';
import { colors } from '../../../theme/variables';

export const CommonGameAreaWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 2fr;
  grid-template-columns: 4fr 2fr;
  height: 100%;
  width: 75%;
  // border: 0.001em solid ${colors.secondaryColor};
  // border-left: 0.001em solid ${colors.secondaryColor};
  background-color: ${colors.commonGameAreaBackgroundColor};
  float: right;
`;