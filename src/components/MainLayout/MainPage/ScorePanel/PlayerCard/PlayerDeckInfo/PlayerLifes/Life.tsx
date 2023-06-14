import styled from 'styled-components';
import { colors } from '../../../../../../../theme/variables';

export const Life = styled.div< { $bright: boolean } >`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$bright === true ? colors.playerCardAlive : colors.playerCardDead)};
  border-radius: 50%;
  width: 45%;
  height: 50%;
  align-self: center;
`;
