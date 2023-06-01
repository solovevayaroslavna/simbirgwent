import styled from 'styled-components';
import { colors } from '../../../../../theme/variables';
import gameAreaBlock from '../../../../../assets/battlefield/field-item.png';

export const CardsRow = styled.div`
  width: 99%;
  height: 95%;
  margin: 0.1em 0em 0.1em 0em;
  justify-content: left;
  align-items: left;
  background-image: url(${gameAreaBlock});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    outline: 0.2vh solid ${colors.gameAreaCircleBlockHoverColor};
  }
`;
