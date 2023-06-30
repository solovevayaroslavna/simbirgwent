import styled from 'styled-components';
import { colors } from '../../../../../theme/variables';
import { Type } from '../Player.types';

export const PlayerCardStyled = styled.div<{ type: Type }>`
  width: 100%;
  height: 100%;
  display: flex;
  grid-area: ${(props) => (props.type === Type.player ? 'playerPlayerCard' : 'enemyPlayerCard')} ;
  flex-direction: row;
  background-color: ${colors.playerCardColor};
`;
