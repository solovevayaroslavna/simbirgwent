import styled from 'styled-components';
import { colors } from '../../../theme/variables';

export const CommonGameAreaWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  grid-template-columns: 3fr 2fr;
  grid-gap: 0.1vh;
  height: calc(100vh - 40px);
  width: 150vh;
  // border: 0.001em solid ${colors.secondaryColor};
  // border-left: 0.001em solid ${colors.secondaryColor};
  background-color: ${colors.commonGameAreaBackgroundColor};
  box-sizing: border-box;
  float: left;
`;
