import styled from 'styled-components';
import restOfDeckImage from '../../../../../assets/battlefield/restOfDeck-test.jpeg';

export const RestOfDeckArea = styled.div`
  grid-row: 2 / 4;
  grid-column: 2 / 3;
  background-image: url(${restOfDeckImage});
  background-size: cover;
`;
