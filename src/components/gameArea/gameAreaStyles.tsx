import styled from 'styled-components';
import { colors } from '../../theme/test';
import gameAreaBlock from '../assets/battlefield/field-item.png';

export const GameAreaWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: 2vw 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 0.6vw;
  box-sizing: border-box;
  padding: 0.6vw;
  background-color: ${colors.gameAreaBackgroundColor};
`;

export const GameAreaBlock = styled.div`
  grid-column: 2 / 3;
  border: 0.001em solid ${colors.secondaryColor};
  box-shadow: 0.001vw 0.2vw 0.2vw ${colors.secondaryColor};
  width: 100%;
  height: 100%;
  background-image: url(${gameAreaBlock});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    outline: 0.1vw solid ${colors.gameAreaCircleBlockColor};
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2vw;
  font-weight: bold;
  background-color: ${colors.gameAreaCircleBlockBackgroundColor};
  color: ${colors.secondaryColor};
  border-radius: 50%;
  width: 2vw;
  height: 2vw;
  align-self: center;
`;
