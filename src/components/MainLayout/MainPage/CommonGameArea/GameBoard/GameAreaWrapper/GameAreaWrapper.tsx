import styled from 'styled-components';
import { colors } from '../../../../../../theme/variables';

export const GameAreaWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 24fr;
  grid-template-rows: 5fr 5fr 5fr 1fr 5fr 5fr 5fr;
  padding-top: 1vh;
  background-color: ${colors.gameAreaBackgroundColor};
`;
