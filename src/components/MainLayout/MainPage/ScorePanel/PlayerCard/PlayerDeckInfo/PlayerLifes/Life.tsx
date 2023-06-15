import styled from 'styled-components';
import { colors } from '../../../../../../../theme/variables';

export const Life = styled.div< { $bright: boolean } >`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$bright === true ? colors.playerCardAliveColor : colors.playerCardDeadColor)};
  border-radius: 50%;
  width: 45%;
  aspect-ratio: 1;
  align-self: center;
`;
