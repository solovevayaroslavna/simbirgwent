import styled from 'styled-components';
import { colors } from '../../../../../../theme/variables';

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  font-weight: bold;
  background-color: ${colors.gameAreaCircleBlockBackgroundColor};
  color: ${colors.secondaryColor};
  border-radius: 50%;
  width: 2vh;
  height: 2vh;
  align-self: center;
`;
