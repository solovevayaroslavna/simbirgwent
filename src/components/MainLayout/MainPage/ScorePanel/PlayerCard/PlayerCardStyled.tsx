import styled from 'styled-components';
import { colors } from '../../../../../theme/variables';
import { PlayerType } from '../Player.types';

export const PlayerCardStyled = styled.div<{ playerType: PlayerType }>`
  width: 100%;
  height: 100%;
  display: flex;
  grid-area: ${(props) => (props.playerType === PlayerType.frienly ? 'friendlyPlayerCard' : 'enemyPlayerCard')} ;
  flex-direction: row;
  background-color: ${colors.playerCardColor};
`;
