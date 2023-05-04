import styled from 'styled-components';
import { colors } from '../../../../../theme/variables';

export const GameAreaWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 3vh 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1vh;
  box-sizing: border-box;
  padding: 1.5vh;
  background-color: ${colors.gameAreaBackgroundColor};
`;
