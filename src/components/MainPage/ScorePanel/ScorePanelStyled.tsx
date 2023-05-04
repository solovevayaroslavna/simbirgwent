import styled from 'styled-components';
import { colors } from '../../../theme/variables';
import cardExample from '../../../assets/cards/card-example.png';

export const ScorePanelStyled = styled.div`
  height: calc(100vh - 40px);
  width: 40vh;
  // border: 0.001em solid ${colors.secondaryColor};
  // border-right: 0.001em solid ${colors.secondaryColor};
  background-image: url(${cardExample});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
