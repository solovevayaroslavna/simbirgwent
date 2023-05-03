import styled from 'styled-components';
import { colors } from '../../theme/variables';
import gameAreaBlock from '../assets/battlefield/field-item.png';

export const GameAreaWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 3vh 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1vh;
  box-sizing: border-box;
  padding: 1.5vh;
  background-color: ${colors.GAME_AREA_BACKGROUND_COLOR};
`;

export const GameAreaBlock = styled.div`
  grid-column: 3 / 4;
  // border: 0.001em solid ${colors.SECONDARY_COLOR};
  // box-shadow: 0.001vh 0.4vh 0.4vh ${colors.SECONDARY_COLOR};
  width: 98.5vh;
  height: 11.5vh;
  background-image: url(${gameAreaBlock});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    outline: 0.2vh solid ${colors.GAME_AREA_CIRCLE_BLOCK_HOVER_COLOR};
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6vh;
  font-weight: bold;
  background-color: ${colors.GAME_AREA_CIRCLE_BLOCK_BACKGROUND_COLOR};
  color: ${colors.SECONDARY_COLOR};
  border-radius: 50%;
  width: 4vh;
  height: 4vh;
  align-self: center;
`;
