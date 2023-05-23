import styled from 'styled-components';
import { colors } from '../../../../theme/variables';

export const UserCardsWrapperStyled = styled.div`
grid-row: 2 / 3;
grid-column: 1 / 2;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
background-color: ${colors.cardsListBackgroundColor};
overflow: auto;
`;
