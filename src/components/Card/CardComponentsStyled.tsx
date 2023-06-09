import styled from 'styled-components';
import {
  Typography, Card, Box,
} from '@material-ui/core';
import '../../theme/colors.css';

export const CardWrapper = styled(Box)`
  height: 100%;
  width: 100%;//если указать 13% то будет выглядеть нормально, но надо создавать контейнер с пропорциями 15/8
`;

export const IndicatorsContainerStyled = styled.div`
position: relative;
height: 100%;
width: calc(15*15%/8);т.к height/width = 15/8, то для того чтобы получить ширину, такую же как высоту, нужно умножить на 8/15`;

export const IndicatorStyled = styled.div<{ fs: number, }>`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 0%;
height: 18%;
width: 100%; //  
font-size: ${(props) => `${props.fs}px`};
border-radius: 50%;
border : .01em solid var(--color-black);
background-color: var(--color-text-main);
color: var(--color-text-second);
z-index:1;
`;

export const TypeIndicatorStyled = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 30%;
height: 18%;
width: 100%;// т.к height/width = 15/8, то для того чтобы получить ширину, такую же как высоту, нужно умножить на 8/15 
background-color: var(--background-type);
border-radius: 50%;
border : 0.1px solid var(--color-black);
color: var(--color-text-second);
z-index:1;
`;

export const AbilityStyled = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 55%;
height: 18%;
width: 100%; //  
border-radius: 50%;
border : .01em solid var(--color-black);
background-color: var(--color-text-main);
color: var(--color-text-second);
z-index:1;
`;

export const ImgContainer = styled.div<{ backgroundImage: string }>`
height: 90%;
width: calc(15*25%/8);
background: url(${(props) => props.backgroundImage}) 50% 60% no-repeat;
background-size: contain;
`;

export const CardBody = styled.div<{ backgroundImage: string }>`
width: 100%;
height: 80%;
display: block;
background: url(${(props) => props.backgroundImage}) no-repeat;
background-size: cover;
`;

export const TypeOfArmyStyled = styled.div`
position: absolute;
top: 10%;
left: 10%;
width: 80%;
background-color: red;
height: 90%;
`;

export const CardStyled = styled(Card)`
  background-color: var(--color-text-main);
  padding 2% 0;
  margin-left: 2%;
  color: var(--color-text-second);
  width: 100%;
  height: 20%;
  border-radius: 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const HeaderStyled = styled(Typography)`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;
