import styled from 'styled-components';
import { colors } from '../../../theme/variables';
import cardExample from '../../../assets/cards/card-example.png';

export const ScorePanelStyled = styled.div`
    background-image: url(${cardExample});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;   
    width: 25%;  
    // border: 0.001em solid ${colors.secondaryColor};
    // border-right: 0.001em solid ${colors.secondaryColor};
    float: left;
`;
