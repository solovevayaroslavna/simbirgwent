import styled from 'styled-components';

export const PStyled = styled.p<{ $bold?: boolean }>`
    font-weight: ${(props) => (props.$bold === true ? 'bold' : 'normal')};
    margin: 5% 0 0 0;
`;
