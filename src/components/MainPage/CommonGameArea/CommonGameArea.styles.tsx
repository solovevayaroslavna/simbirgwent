import styled from 'styled-components';
import { colors } from '../../../theme/variables';

export const CommonGameAreaWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 2fr;
  grid-template-columns: 4fr 2fr;
  // grid-gap: 0.1px;
  height: 100%;
  width: 80%;
  // border: 0.001em solid ${colors.secondaryColor};
  // border-left: 0.001em solid ${colors.secondaryColor};
  background-color: ${colors.commonGameAreaBackgroundColor};
  // box-sizing: border-box;
  float: right;
`;
