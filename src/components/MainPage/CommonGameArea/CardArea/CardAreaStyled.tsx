import styled from 'styled-components';
import gameCardAreaImg from '../../../../assets/battlefield/gameCardArea-test.jpeg';

export const GameCardAreaWrapper = styled.div` 
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  background-image: url(${gameCardAreaImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
