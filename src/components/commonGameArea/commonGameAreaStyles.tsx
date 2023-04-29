import styled from 'styled-components';
import { colors } from '../../theme/test';

export const CommonGameAreaWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  grid-template-columns: 2fr 1fr;
  grid-gap: 0.05vw;
  height: 100vh;
  width: 80vw;
  border: 0.001em solid ${colors.secondaryColor};
  border-left: 0.001em solid ${colors.secondaryColor};
  background-color: ${colors.primaryColor};
  box-sizing: border-box;
  float: left;
`;
