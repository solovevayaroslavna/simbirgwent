import styled from 'styled-components';
import { colors } from '../../../../../../theme/variables';
import gameAreaBlock from '../../../../../../assets/battlefield/field-item.png';

export const GameAreaBlock = styled.div`
  grid-column: 3 / 4;
  // border: 0.001em solid ${colors.secondaryColor};
  // box-shadow: 0.001vh 0.4vh 0.4vh ${colors.secondaryColor};
  width: 98.5vh;
  height: 11.5vh;
  background-image: url(${gameAreaBlock});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    outline: 0.2vh solid ${colors.gameAreaCircleBlockHoverColor};
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6vh;
  font-weight: bold;
  background-color: ${colors.gameAreaCircleBlockBackgroundColor};
  color: ${colors.secondaryColor};
  border-radius: 50%;
  width: 4vh;
  height: 4vh;
  align-self: center;
`;
