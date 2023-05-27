import styled from 'styled-components';
import cardExample from '../../../assets/cards/card-example.png';

export const ScorePanelStyled = styled.div`
    background-image: url(${cardExample});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    height: 100%;   
    width: 25%;  
    float: left;
`;
