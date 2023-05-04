import styled from 'styled-components';
import cardsPanelImage from '../../../../assets/battlefield/cardsPanel-test.jpeg';

export const CardsPanelArea = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  background-image: url(${cardsPanelImage});
  background-size: cover;
`;
