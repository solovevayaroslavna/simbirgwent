import styled from 'styled-components';
import { colors } from '../../../../../../../theme/variables';

export const RestOfDeckStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${colors.playerCardFontColor};
  font-size: min(1.1vw, 2.2vh);
`;
