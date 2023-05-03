import styled from 'styled-components';
import { colors } from '../../theme/variables';

export const CommonGameAreaWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.1vh;
  height: 100vh;
  width: 80%;
  // border: 0.001em solid ${colors.SECONDARY_COLOR};
  // border-left: 0.001em solid ${colors.SECONDARY_COLOR};
  background-color: ${colors.COMMON_GAME_AREA_BACKGROUND_COLOR};
  box-sizing: border-box;
  float: left;
`;
