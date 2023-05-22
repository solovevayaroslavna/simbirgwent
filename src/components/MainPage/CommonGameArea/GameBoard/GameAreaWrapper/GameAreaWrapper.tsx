import styled from 'styled-components';
import { colors } from '../../../../../theme/variables';

export const GameAreaWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
  // grid-template-rows: repeat(6, 1fr);
  // grid-gap: 1vh;
  // box-sizing: border-box;
  // padding: 1.5%;
  background-color: ${colors.gameAreaBackgroundColor};
`;
