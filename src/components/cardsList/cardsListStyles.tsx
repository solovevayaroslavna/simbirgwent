import styled from 'styled-components';
import { colors } from '../../theme/variables';

export const CardList = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    background-color: ${colors.CARDS_LIST_BACKGROUND_COLOR};
    overflow: auto;
`;

export const Card = styled.div`
    width: 10vh;
    height: 15vh;
    margin: 0 0.2%;
    background-color: ${colors.PRIMARY_COLOR};

  &:hover {
    transform: scale(1.2);
  }
`;
