import styled from 'styled-components';
import { colors } from '../../../../../../../theme/variables';
import { Type } from '../../Player.types';

export const Circle = styled.div<{ playerType: Type }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(0.9vw, 1.8vh);
  font-weight: bold;
  background-color: ${(props) => (props.playerType === Type.player
    ? colors.gameAreaCirclePlayerColor
    : colors.gameAreaCircleOpponentColor)};
  margin: 0 0 0 0.3em;
  color: ${colors.secondaryColor};
  border: 2px solid grey;
  border-radius: 50%;
  width: 3vh;
  height: 3vh;
  align-self: center;
`;
