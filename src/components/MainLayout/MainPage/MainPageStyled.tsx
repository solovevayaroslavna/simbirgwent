import styled from 'styled-components';
import { colors } from '../../../theme/variables';

export const MainPageStyled = styled.div`
    background:  ${colors.primaryColor};
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 94%;
    max-width: 90%;
    min-height: 10%;
    min-width: 10%;
    aspect-ratio: 1170 / 720;
    margin: auto; 
    display: grid;
    grid-template-areas: "left right";
    grid-template-columns: 21% 79%;
`;
