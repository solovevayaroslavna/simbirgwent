import styled from 'styled-components';
import { colors } from '../../../../../../theme/variables';

export const PStyled = styled.p<{ $bold?: boolean }>`
    font-weight: ${(props) => (props.$bold === true ? 'bold' : 'normal')};
    color: ${colors.playerCardFontColor};
    margin: 5% 0 0 0;
    font-size: min(0.9vw, 1.8vh);
`;
