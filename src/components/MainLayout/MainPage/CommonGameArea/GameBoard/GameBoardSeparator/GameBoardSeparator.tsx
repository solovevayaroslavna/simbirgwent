import styled from 'styled-components';
import { colors } from '../../../../../../theme/variables';

export const GameBoardSepatator = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${colors.primaryColor};
  grid-column: 1 / -1;
  align-self: center;
`;
