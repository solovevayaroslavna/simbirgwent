import styled from 'styled-components';
import { colors } from '../../../../../theme/variables';
import gameAreaBlock from '../../../../../assets/battlefield/field-item.png';

export const CardsRow = styled.div`
  // border: 0.001em solid ${colors.secondaryColor};
  // box-shadow: 0.001vh 0.4vh 0.4vh ${colors.secondaryColor};
  width: 99%;
  height: 90%;
  justify-content: left;
  align-items: left;
  background-image: url(${gameAreaBlock});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    outline: 0.2vh solid ${colors.gameAreaCircleBlockHoverColor};
  }
`;
