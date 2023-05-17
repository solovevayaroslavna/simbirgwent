import styled from 'styled-components';
import { Card, Typography } from '@material-ui/core';
import '../../theme/colors.css';

export const IndicatorStyled = styled.div<{ myTop?: string }>`
position: absolute;
display:flex;
justify-content: center;
align-items:center;
left: 0%; 
top: ${(props) => (props.myTop ? props.myTop : '0%')};
height: 15%;
width: calc(15*15%/8);
font-size:calc(100vh/15);
border-radius: 50%;
border : .05em solid #000;
background-color: var(--color-text-main);
color:var(--color-text-second);
`;

export const TypeIndicatorStyled = styled.div`
position: absolute;
display:flex;
justify-content: center;
align-items:center;
left: 0%; 
top: 25%;
height: 15%;
width: calc(15*15%/8);
font-size:calc(100vh/15);
background-color: var(--background-type);
border-radius: 50%;
border : .05em solid #000;
color:var(--color-text-second);
`;
export const ImgContainer = styled.div<{ backgroundImage?: string }>`
height: 90%;
width: calc(25*15%/8);
background: url(${(props) => props.backgroundImage}) 50% 60% no-repeat;
background-size: contain;
`;

export const CardBody = styled.div<{ backgroundImage?: string }>`
width: 100%;
height: 80%;
display:block;
background: url(${(props) => props.backgroundImage}) no-repeat;
background-size: cover;
`;

export const TypeOfArmyStyled = styled.div<{ backgroundImage?: string }>`
position: absolute;
top: 7%;
width: 20%;
height: 100%;
`;

export const CardStyled = styled(Card)({
  backgroundColor: 'var(--color-text-main)',
  color: 'var(--color-text-second)',
  width: 'inherit',
  height: '20%',
  fontSize: 'calc(100vh/30)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});

export const TypographyStyled = styled(Typography)({
  position: 'relative',
  width: '80%',
  fontSize: 'calc(100vh/30)',
  fontWeight: 'bold',
  marginLeft: '20%',
});
