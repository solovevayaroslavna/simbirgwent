import styled, { css } from 'styled-components';
import { colors } from '../../../../../../../theme/variables';
import gameAreaBlock from '../../../../../../../assets/battlefield/field-item.png';

export const SpecialCardsPart = styled.div<{ highlighted: boolean }>`
  width: 100%;
  height: 95%;
  margin: 0.1em 0 0.1em 0;
  justify-content: left;
  align-items: left;
  border-left: 0.2em solid grey;
  background-image: url(${gameAreaBlock});
  background-repeat: no-repeat;
  background-size: cover;
  ${(props) => props.highlighted === true && css`
    outline: 0.2vh solid ${colors.gameAreaCircleBlockHoverColor};
  `}
`;
