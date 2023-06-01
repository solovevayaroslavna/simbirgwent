import styled from 'styled-components';
import { colors } from '../../../../../../theme/variables';

export const Life = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.playerCardAlive};
  border-radius: 50%;
  width: 5vh;
  height: 5vh;
  align-self: center;
`;
